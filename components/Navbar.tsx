// File: components/Navbar.tsx
"use client";

import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-serif text-2xl font-bold text-zinc-900 tracking-tight">
          Master Tiler.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-500">
          <a href="#about" className="hover:text-zinc-900 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-zinc-900 transition-colors">Expertise</a>
          <a href="#gallery" className="hover:text-zinc-900 transition-colors">Gallery</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 md:gap-6">
          {/* WhatsApp Link applied to Phone Icon */}
          <a 
            href="https://wa.me/918949608947" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            title="Chat on WhatsApp"
          >
            <Phone className="w-5 h-5 text-zinc-600 hover:text-zinc-900 transition-colors" />
          </a>
          
          {/* Email Link applied to Sponsor Me Button */}
          <a 
            href="mailto:adityaprajapat28@gmail.com?subject=Visa Sponsorship Inquiry - Master Tiler"
            className="px-5 py-2.5 bg-zinc-900 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors rounded-sm"
          >
            Sponsor Me
          </a>
        </div>
        
      </div>
    </nav>
  );
}