"use client";
import "./reset.css";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <button onClick={toggleTheme} style={{ position: 'fixed', top: '10px', right: '10px' }}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        {children}
      </body>
    </html>
  );
}
