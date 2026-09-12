"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

function computeCharTimes(text: string, rate: number = 0.85) {
  // Base duration per character (in ms).
  // Standard speech at 1.0 rate is ~65ms/char. At 0.85 rate it's ~75ms/char.
  const baseMsPerChar = Math.round(65 / rate);
  const charTimes: number[] = new Array(text.length);
  let currentTime = 0;

  for (let i = 0; i < text.length; i++) {
    charTimes[i] = currentTime;
    const char = text[i];
    let duration = baseMsPerChar;

    if (char === ',' || char === ';') {
      duration += 250;
    } else if (char === '.' || char === '!' || char === '?') {
      duration += 450;
    }
    currentTime += duration;
  }

  return { charTimes, totalDuration: currentTime };
}

export function useAudioGuide() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const boundaryFiredRef = useRef<boolean>(false);
  const isMounted = useRef(true);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    const loadVoices = () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        setVoices(window.speechSynthesis.getVoices());
      }
    };
    
    loadVoices();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      isMounted.current = false;
      clearTimer();
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [clearTimer]);

  const stop = useCallback(() => {
    clearTimer();
    boundaryFiredRef.current = false;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (isMounted.current) {
      setIsPlaying(false);
      setIsPaused(false);
      setCharIndex(0);
    }
  }, [clearTimer]);

  const play = useCallback((text: string, onEnd?: () => void) => {
    if (!text) return;
    
    // Stop any current playback & clear timers
    stop();

    const availableVoices = voices.length > 0 
      ? voices 
      : (typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis.getVoices() : []);

    // Set playing state immediately so UI updates instantly
    if (isMounted.current) {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentText(text);
      setCharIndex(0);
    }

    // Small delay to ensure cancel finishes cleanly across browser engines
    setTimeout(() => {
      if (!isMounted.current) return;
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;
      boundaryFiredRef.current = false;

      // Select preferred voice: UK Female -> UK -> English -> Any
      let selectedVoice = availableVoices.find(v => 
        v.lang === 'en-GB' && v.name.toLowerCase().includes('female')
      );
      if (!selectedVoice) {
        selectedVoice = availableVoices.find(v => v.lang === 'en-GB');
      }
      if (!selectedVoice) {
        selectedVoice = availableVoices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'));
      }
      if (!selectedVoice) {
        selectedVoice = availableVoices.find(v => v.lang.startsWith('en'));
      }
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      const rate = 0.85;
      utterance.rate = rate;
      utterance.pitch = 1.1;

      // Pre-compute fallback char timing curve
      const { charTimes } = computeCharTimes(text, rate);

      utterance.onstart = () => {
        if (!isMounted.current) return;
        startTimeRef.current = Date.now();

        // Start fallback timer loop to guarantee word highlighting even if browser misses onboundary events
        clearTimer();
        timerRef.current = setInterval(() => {
          if (!isMounted.current) return;
          
          // If native boundary events are actively firing, let onboundary take full control
          if (boundaryFiredRef.current) return;

          const elapsed = Date.now() - startTimeRef.current;
          let activeIndex = 0;
          for (let i = 0; i < charTimes.length; i++) {
            if (charTimes[i] <= elapsed) {
              activeIndex = i;
            } else {
              break;
            }
          }
          setCharIndex(activeIndex);
        }, 40);
      };

      utterance.onboundary = (e) => {
        if (isMounted.current && typeof e.charIndex === 'number') {
          boundaryFiredRef.current = true;
          setCharIndex(e.charIndex);
        }
      };

      utterance.onend = () => {
        clearTimer();
        boundaryFiredRef.current = false;
        if (isMounted.current) {
          setIsPlaying(false);
          setCharIndex(0);
          if (onEnd) onEnd();
        }
      };

      utterance.onerror = (e) => {
        clearTimer();
        boundaryFiredRef.current = false;
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.error("Speech synthesis error:", e);
        }
        if (isMounted.current) {
          setIsPlaying(false);
        }
      };

      window.speechSynthesis.speak(utterance);
    }, 40);
  }, [voices, stop, clearTimer]);

  return { play, stop, isPlaying, isPaused, charIndex, currentText };
}

