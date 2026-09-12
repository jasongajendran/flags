import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Kids World Flags Explorer 🌍',
  description: 'An interactive map for kids to learn about countries, flags, and fun facts with guided audio!',
  openGraph: {
    title: 'Kids World Flags Explorer 🌍',
    description: 'An interactive map for kids to learn about countries, flags, and fun facts with guided audio!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kids World Flags Explorer 🌍',
    description: 'An interactive map for kids to learn about countries, flags, and fun facts with guided audio!',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
