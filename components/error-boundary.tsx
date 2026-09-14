'use client';

import React, { Component, ReactNode } from 'react';
import { RotateCcw, AlertCircle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // If it is a ChunkLoadError, it usually means the dev server or deployed assets updated
    if (
      typeof window !== 'undefined' &&
      (error?.name === 'ChunkLoadError' ||
        error?.message?.includes('Loading chunk') ||
        error?.message?.includes('ChunkLoadError'))
    ) {
      console.warn('ChunkLoadError detected in ErrorBoundary. Reloading page...');
      window.location.reload();
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full p-6 my-4 rounded-3xl bg-amber-50 border-2 border-amber-200 text-amber-950 flex flex-col items-center text-center shadow-sm">
          <div className="p-3 bg-amber-100 rounded-2xl text-amber-800 mb-3">
            <AlertCircle size={28} />
          </div>
          <h4 className="font-extrabold text-base mb-1">
            {this.props.fallbackTitle || 'Map Preview Temporarily Unavailable'}
          </h4>
          <p className="text-xs text-amber-800/90 max-w-md mb-4 leading-relaxed">
            {this.props.fallbackDescription ||
              'A temporary asset loading error occurred. Click below to reload the view.'}
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              } else {
                this.handleReset();
              }
            }}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-black rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Reload View</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
