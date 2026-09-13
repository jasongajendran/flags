
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">Something went wrong! 🎈</h1>
        <button
          onClick={() => reset()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all"
        >
          Try Again 🔄
        </button>
      </body>
    </html>
  );
}
