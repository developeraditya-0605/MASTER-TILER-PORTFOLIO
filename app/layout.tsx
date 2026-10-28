// File: app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Master Tile & Marble Specialist | WA CVSP Candidate",
  description: "Master Tile and Marble Specialist with 26 years of global precision in ultra-luxury finishes. Available for relocation to Western Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-zinc-50 text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}