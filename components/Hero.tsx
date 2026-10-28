// File: components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Subtle marble texture background pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-50/80 via-transparent to-zinc-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={{ show: { transition: { staggerChildren: 0.15 } } }} 
          className="max-w-4xl"
        >
          {/* Top Intro Tag with Name */}
          <motion.div variants={itemVariants} className="flex items-center flex-wrap gap-y-2 mb-8">
            <div className="h-px w-12 bg-zinc-400 mr-4"></div>
            <span className="text-zinc-900 font-bold tracking-[0.2em] uppercase text-xs">JITENDRA</span>
            <span className="text-zinc-300 mx-3">|</span>
            <span className="text-zinc-600 font-semibold tracking-[0.2em] uppercase text-xs">Available for Relocation to Western Australia</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.15] mb-6">
            Master Tile & Marble Specialist. <br/>
            {/* Opacity increased for 26 Years text for better visibility */}
            <span className="text-zinc-700 italic">26 Years of Global Precision.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-600 mb-12 font-light leading-relaxed max-w-2xl">
            Expert in ultra-luxury finishes, custom marble features, and precision tiling. Available immediately for Subclass 482 & WA CVSP Sponsorship.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <Link href="mailto:hr@example.com?subject=Sponsorship%20Inquiry" 
               className="group flex items-center justify-center space-x-3 px-8 py-4 bg-zinc-900 text-white text-sm font-semibold tracking-widest uppercase hover:bg-zinc-800 transition-all duration-300 shadow-soft">
              <Mail size={18} strokeWidth={1.5} />
              <span>Email for Sponsorship</span>
            </Link>
            <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
               className="group flex items-center justify-center space-x-3 px-8 py-4 border border-zinc-300 text-zinc-800 text-sm font-semibold tracking-widest uppercase hover:border-zinc-500 hover:text-zinc-900 transition-all duration-300">
              <span>View Project Gallery</span>
              <ArrowRight size={18} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}