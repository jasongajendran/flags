import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'World Flags & Country Explorer 🌍',
  description: 'A comprehensive interactive directory of 196 nations and territories across all 7 continents with geographical maps and audio profiles.',
  openGraph: {
    title: 'World Flags & Country Explorer 🌍',
    description: 'A comprehensive interactive directory of 196 nations and territories across all 7 continents with geographical maps and audio profiles.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Flags & Country Explorer 🌍',
    description: 'A comprehensive interactive directory of 196 nations and territories across all 7 continents with geographical maps and audio profiles.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="bg-slate-900 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
