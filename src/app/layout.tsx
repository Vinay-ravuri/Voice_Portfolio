import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravuri Vinay | Full Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Ravuri Vinay — Full Stack Developer & AI/ML Engineer at GIET Engineering College. Building intelligent, elegant, and scalable digital experiences.",
  keywords: [
    "Ravuri Vinay",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Next.js Portfolio",
    "React Developer",
    "Java Spring Boot",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Preconnect for Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col relative" style={{ backgroundColor: '#F8F8F7' }}>
        {/* Subtle noise grain texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
