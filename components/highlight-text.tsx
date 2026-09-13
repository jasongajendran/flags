"use client";
import React from 'react';
import { Volume2, Sparkles } from 'lucide-react';

export function HighlightText({ 
  text, 
  active,
  label = "Audio Narration"
}: { 
  text: string; 
  charIndex?: number; 
  active: boolean;
  label?: string;
}) {
  return (
    <div 
      className={`relative p-5 sm:p-6 rounded-2xl transition-all duration-300 ${
        active 
          ? 'bg-gradient-to-r from-amber-50 to-indigo-50/70 border-2 border-indigo-400 shadow-md ring-4 ring-indigo-100' 
          : 'bg-slate-50/80 border border-slate-200'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-indigo-900 shadow-xs">
          {active ? (
            <>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
              </span>
              <Volume2 size={13} className="text-indigo-600 animate-pulse" />
              <span>Speaking Now</span>
            </>
          ) : (
            <>
              <Sparkles size={13} className="text-amber-500" />
              <span>{label}</span>
            </>
          )}
        </span>
        {active && (
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-full animate-pulse">
            Audio Active
          </span>
        )}
      </div>

      <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-800 tracking-normal">
        {text}
      </p>
    </div>
  );
}
