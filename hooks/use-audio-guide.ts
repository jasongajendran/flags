"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// Formats text so speech synthesis pronounces numbers and abbreviations naturally
export function cleanTextForSpeech(input: string): string {
  if (!input) return "";
  return input
    // Expand Saint abbreviations before capitalized words and names (e.g. St. Peter -> Saint Peter, St. John's -> Saint John's, St. Lucia -> Saint Lucia)
    .replace(/\bSt\.\s+([A-Z])/g, 'Saint $1')
    .replace(/\bSte\.\s+([A-Z])/g, 'Sainte $1')
    .replace(/\bSt\s+(Peter|John|George|Andrew|Patrick|Kitts|Lucia|Vincent|Helier|Pierre|Paul|Louis|Lawrence|Basil|Floris|Kinga|Thomas|Croix|Martin|Maarten|Omer)\b/gi, 'Saint $1')
    // Expand Mountain / Mount abbreviations: Mt. Everest -> Mount Everest
    .replace(/\bMt\.\s+([A-Z])/g, 'Mount $1')
    .replace(/\bFt\.\s+([A-Z])/g, 'Fort $1')
    .replace(/\bPt\.\s+([A-Z])/g, 'Point $1')
    .replace(/\bDr\.\s+([A-Z])/g, 'Doctor $1')
    // Expand number suffixes: 12M -> 12 Million, 2.8M -> 2.8 Million, 1.4B -> 1.4 Billion, 80K -> 80 Thousand
    .replace(/(\b\d+(?:\.\d+)?)\s*M\b/g, '$1 Million')
    .replace(/(\b\d+(?:\.\d+)?)\s*B\b/g, '$1 Billion')
    .replace(/(\b\d+(?:\.\d+)?)\s*K\b/g, '$1 Thousand')
    // Expand Pop: to Population:
    .replace(/\bPop:\s*/gi, 'Population: ')
    // Expand geographic abbreviations
    .replace(/\bsq\s*km\b/gi, 'square kilometers')
    .replace(/\bkm²\b/gi, 'square kilometers')
    .replace(/\bkm\b/gi, 'kilometers')
    .replace(/\bsq\s*mi\b/gi, 'square miles')
    .replace(/\bmi²\b/gi, 'square miles')
    .replace(/\b(\d+)\s*m\s+(above|elevation|altitude|high|deep)\b/gi, '$1 meters $2')
    .replace(/\s+/g, ' ')
    .trim();
}

export function useAudioGuide() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentText, setCurrentText] = useState("");
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isMounted = useRef(true);

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
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (isMounted.current) {
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, []);

  const play = useCallback((text: string, onEnd?: () => void) => {
    if (!text) return;
    
    // Stop previous utterance
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const availableVoices = voices.length > 0 
      ? voices 
      : (typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis.getVoices() : []);

    if (isMounted.current) {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentText(text);
    }

    setTimeout(() => {
      if (!isMounted.current) return;
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      const speechText = cleanTextForSpeech(text);
      const utterance = new SpeechSynthesisUtterance(speechText);
      utteranceRef.current = utterance;

      // Select a clear natural English voice
      let selectedVoice = availableVoices.find(v => 
        v.lang === 'en-GB' && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('natural'))
      );
      if (!selectedVoice) {
        selectedVoice = availableVoices.find(v => v.lang === 'en-GB');
      }
      if (!selectedVoice) {
        selectedVoice = availableVoices.find(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('online')));
      }
      if (!selectedVoice) {
        selectedVoice = availableVoices.find(v => v.lang.startsWith('en'));
      }
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      utterance.onstart = () => {
        if (!isMounted.current) return;
        setIsPlaying(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        if (isMounted.current) {
          setIsPlaying(false);
          setIsPaused(false);
          if (onEnd) onEnd();
        }
      };

      utterance.onerror = (e) => {
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.error("Speech error:", e);
        }
        if (isMounted.current) {
          setIsPlaying(false);
          setIsPaused(false);
        }
      };

      window.speechSynthesis.speak(utterance);
    }, 50);
  }, [voices]);

  return { play, stop, isPlaying, isPaused, currentText };
}
