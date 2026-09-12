import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">404 - Page Not Found 🌍</h1>
      <p className="text-xl text-sky-700 font-semibold mb-6">
        Oops! We couldn&apos;t find that flag or page.
      </p>
      <Link 
        href="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all"
      >
        Back to World Map 🏠
      </Link>
    </div>
  );
}
