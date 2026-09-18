import Link from 'next/link';
import { Globe, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 bg-sky-950 text-sky-400 rounded-3xl mb-4 border border-sky-800 shadow-lg">
        <Globe size={40} className="animate-spin-slow" />
      </div>
      <h1 className="text-3xl font-extrabold text-white mb-2">404 - Country Not Found</h1>
      <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
        The destination you are looking for does not exist in our Atlas directory.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
      >
        <ArrowLeft size={16} />
        <span>Return to World Atlas</span>
      </Link>
    </div>
  );
}
