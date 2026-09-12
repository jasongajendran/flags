"use client";
import React, { useMemo, useEffect, useRef } from 'react';

export function HighlightText({ 
  text, 
  charIndex, 
  active 
}: { 
  text: string; 
  charIndex: number; 
  active: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const tokens = useMemo(() => {
    const words: { word: string; start: number; end: number; isSpace: boolean }[] = [];
    let match;
    const regex = /\S+|\s+/g;
    while ((match = regex.exec(text)) !== null) {
      words.push({
        word: match[0],
        start: match.index,
        end: match.index + match[0].length,
        isSpace: /^\s+$/.test(match[0])
      });
    }
    return words;
  }, [text]);

  // Find the index of the currently active token based on charIndex
  let activeTokenIndex = -1;
  if (active) {
    for (let i = tokens.length - 1; i >= 0; i--) {
      if (!tokens[i].isSpace && tokens[i].start <= charIndex) {
        activeTokenIndex = i;
        break;
      }
    }
  }

  // Optional: Auto-scroll to active token if inside a scrolling container
  useEffect(() => {
    if (active && activeTokenIndex >= 0 && containerRef.current) {
      const activeEl = containerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeTokenIndex, active]);

  return (
    <div ref={containerRef} className="text-xl md:text-2xl font-medium leading-relaxed font-sans">
      {tokens.map((token, i) => {
        const isCurrent = activeTokenIndex === i;
        if (token.isSpace) {
          return <span key={i}>{token.word}</span>;
        }

        return (
          <span 
            key={i} 
            data-active={isCurrent}
            className={`transition-all duration-200 ease-in-out inline-block px-[2px] rounded-md ${
              isCurrent 
                ? 'bg-yellow-300 text-indigo-900 scale-110 shadow-sm font-bold -translate-y-1' 
                : 'opacity-90'
            }`}
          >
            {token.word}
          </span>
        );
      })}
    </div>
  );
}
