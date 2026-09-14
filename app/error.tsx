'use client';

import { useEffect } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error encountered:', error);
    if (
      typeof window !== 'undefined' &&
      (error?.name === 'ChunkLoadError' ||
        error?.message?.includes('Loading chunk') ||
        error?.message?.includes('ChunkLoadError'))
    ) {
      console.warn('ChunkLoadError detected in AppError. Auto-refreshing to load latest assets...');
      window.location.reload();
    }
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 bg-indigo-50 text-indigo-700 rounded-3xl mb-4 border border-indigo-100 shadow-sm">
        <AlertTriangle size={36} />
      </div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">Notice: Quick Refresh Needed</h2>
      <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
        The application assets were recently updated. Let&apos;s reload to get the latest interactive maps and country data.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.reload();
            } else {
              reset();
            }
          }}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
        >
          <RotateCcw size={16} />
          <span>Reload Application</span>
        </button>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl transition-all cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
