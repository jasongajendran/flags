"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

// Tiny 1-frame silent WebM video data URI for Android OS-level keep-screen-on fallback
const SILENT_VIDEO_URI =
  "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnAQAAAAAAABwEUmlkMoECD2VAcIKBA0KHgQFChYECGFOAZwEAAAAAAAALBFJpZDKBAg91c7+BAM7/h0Wqg0Jqg0KbgQ==";

export function useFullscreenWakelock() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [keepAwake, setKeepAwake] = useState(true);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [supportsWakeLock] = useState<boolean>(() => {
    return typeof window !== 'undefined' && 'wakeLock' in navigator;
  });
  
  const wakeLockSentinelRef = useRef<any>(null);
  const videoFallbackRef = useRef<HTMLVideoElement | null>(null);
  const keepAwakeRef = useRef(true);
  const requestWakeLockRef = useRef<(() => void) | null>(null);

  // Sync ref in effect, avoiding render-time ref mutation
  useEffect(() => {
    keepAwakeRef.current = keepAwake;
  }, [keepAwake]);

  // Track Fullscreen status across vendor prefixes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isDocFull = Boolean(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullScreen(isDocFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Play invisible silent video fallback (vital for Android browsers & WebViews)
  const playVideoFallback = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      if (!videoFallbackRef.current) {
        const vid = document.createElement('video');
        vid.setAttribute('playsinline', '');
        vid.setAttribute('webkit-playsinline', '');
        vid.setAttribute('muted', '');
        vid.setAttribute('loop', '');
        vid.muted = true;
        vid.loop = true;
        vid.src = SILENT_VIDEO_URI;
        vid.style.position = 'fixed';
        vid.style.top = '-9999px';
        vid.style.left = '-9999px';
        vid.style.width = '1px';
        vid.style.height = '1px';
        vid.style.opacity = '0';
        vid.style.pointerEvents = 'none';
        document.body.appendChild(vid);
        videoFallbackRef.current = vid;
      }

      if (videoFallbackRef.current && videoFallbackRef.current.paused) {
        const playPromise = videoFallbackRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setWakeLockActive(true);
            })
            .catch(() => {
              // Browser may require user gesture
            });
        }
      }
    } catch {
      // Ignored
    }
  }, []);

  // Request standard Screen Wake Lock API
  const requestWakeLock = useCallback(() => {
    if (typeof window === 'undefined') return;

    if ('wakeLock' in navigator && (navigator as any).wakeLock) {
      if (wakeLockSentinelRef.current) {
        wakeLockSentinelRef.current.release().catch(() => {});
        wakeLockSentinelRef.current = null;
      }

      (navigator as any).wakeLock
        .request('screen')
        .then((sentinel: any) => {
          wakeLockSentinelRef.current = sentinel;
          setWakeLockActive(true);

          sentinel.addEventListener('release', () => {
            setWakeLockActive(false);
            wakeLockSentinelRef.current = null;
            if (keepAwakeRef.current && document.visibilityState === 'visible') {
              setTimeout(() => {
                if (keepAwakeRef.current && document.visibilityState === 'visible') {
                  requestWakeLockRef.current?.();
                }
              }, 1000);
            }
          });
        })
        .catch(() => {
          setWakeLockActive(false);
        });
    }

    playVideoFallback();
  }, [playVideoFallback]);

  // Keep ref up to date
  useEffect(() => {
    requestWakeLockRef.current = requestWakeLock;
  }, [requestWakeLock]);

  // Main lifecycle for keep-awake: acquire on enable, release on cleanup
  useEffect(() => {
    if (!keepAwake) {
      return;
    }

    // Schedule async acquisition
    const timer = setTimeout(() => {
      requestWakeLockRef.current?.();
    }, 0);

    // Handle visibility changes (re-acquire when returning from background or switching tabs)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && keepAwakeRef.current) {
        requestWakeLockRef.current?.();
      } else if (document.visibilityState === 'hidden') {
        if (videoFallbackRef.current) {
          videoFallbackRef.current.pause();
        }
      }
    };

    // User gesture listener for Android/mobile activation if initial autoplay was blocked
    const handleUserGesture = () => {
      if (keepAwakeRef.current && !wakeLockSentinelRef.current) {
        requestWakeLockRef.current?.();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('touchstart', handleUserGesture, { once: true, passive: true });
    window.addEventListener('click', handleUserGesture, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('touchstart', handleUserGesture);
      window.removeEventListener('click', handleUserGesture);

      if (wakeLockSentinelRef.current) {
        wakeLockSentinelRef.current.release().catch(() => {});
        wakeLockSentinelRef.current = null;
      }

      if (videoFallbackRef.current) {
        try {
          videoFallbackRef.current.pause();
        } catch {
          // ignore
        }
      }

      setWakeLockActive(false);
    };
  }, [keepAwake]);

  // Clean up video element on unmount
  useEffect(() => {
    return () => {
      if (videoFallbackRef.current && videoFallbackRef.current.parentNode) {
        videoFallbackRef.current.parentNode.removeChild(videoFallbackRef.current);
        videoFallbackRef.current = null;
      }
    };
  }, []);

  // Toggle Fullscreen Mode
  const toggleFullScreen = async () => {
    if (typeof window === 'undefined') return;

    try {
      const doc = document as any;
      const docEl = document.documentElement as any;

      const isCurrentlyFull = Boolean(
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );

      if (!isCurrentlyFull) {
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
          await docEl.webkitRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
          await docEl.mozRequestFullScreen();
        } else if (docEl.msRequestFullscreen) {
          await docEl.msRequestFullscreen();
        }
        setIsFullScreen(true);
      } else {
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          await doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
        setIsFullScreen(false);
      }

      // Re-trigger keep-awake after entering fullscreen (especially on Android)
      if (keepAwakeRef.current) {
        requestWakeLockRef.current?.();
      }
    } catch (err) {
      console.warn('Fullscreen toggle failed:', err);
    }
  };

  const toggleKeepAwake = () => {
    setKeepAwake((prev) => !prev);
  };

  return {
    isFullScreen,
    toggleFullScreen,
    keepAwake,
    toggleKeepAwake,
    wakeLockActive,
    supportsWakeLock,
    requestWakeLock
  };
}
