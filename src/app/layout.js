import './globals.css';
import Background from '../components/background';
import Nav from '../components/nav';
import GlobalLoader from '../components/GlobalLoader';
import { Barlow_Condensed } from 'next/font/google';

export const metadata = {
  title: 'David Adams – Portfolio',
  description: 'Full-stack developer building fast, accessible, and dependable web products.',
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Load Barlow Condensed
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="relative min-h-screen text-white font-barlow antialiased">
        <GlobalLoader>
          {/* Global background */}
          <Background />

          {/* Navigation */}
          <Nav />

          {/* Page content */}
          <div className="relative z-10">{children}</div>
        </GlobalLoader>
      </body>
    </html>
  );
}
