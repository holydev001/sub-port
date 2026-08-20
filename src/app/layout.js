import './globals.css';
import Background from '../components/background';
import Nav from '../components/nav';
import GlobalLoader from '../components/GlobalLoader';
import { Barlow_Condensed } from 'next/font/google';

export const metadata = {
  title: 'David Adams – Portfolio',
  description: 'Full-stack developer building fast, accessible, and dependable web products.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#015cb3',
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
    <html lang="en" className={barlow.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c={blue:'#015cb3',green:'#0a7a40',red:'#991b1b',graphite:'#4b5563',gold:'#a16207',purple:'#7e22ce'};var a=Object.keys(c);var p=localStorage.getItem('portfolio-theme');var o=a.filter(function(t){return t!==p});var t=o[Math.floor(Math.random()*o.length)]||a[0];localStorage.setItem('portfolio-theme',t);document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',c[t])}catch(e){}})();`,
          }}
        />
      </head>
      <body className="relative min-h-[100dvh] text-white font-barlow antialiased">
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
