// File: components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Landmark, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- NEW SECTION: "Why Sponsor Me?" --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="text-center md:text-left mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">Why Sponsor Me?</h2>
            <div className="w-12 h-[2px] bg-zinc-300 mx-auto md:mx-0 mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-6 border border-zinc-100 rounded-sm">
              <CheckCircle className="text-zinc-400 mb-4" size={24} />
              <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Maturity & Stability</h3>
              <p className="text-zinc-600 font-light text-sm leading-relaxed">
                At 49 years old, I bring mature leadership, calm decision-making, and long-term stability. I am looking for a permanent career transition to Australia, guaranteeing loyalty and reliability to my sponsoring employer.
              </p>
            </div>
            
            <div className="bg-zinc-50 p-6 border border-zinc-100 rounded-sm">
              <CheckCircle className="text-zinc-400 mb-4" size={24} />
              <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Independent Execution</h3>
              <p className="text-zinc-600 font-light text-sm leading-relaxed">
                With 7 years as an independent contractor in Qatar, I don't just follow orders—I manage sites. I can read complex blueprints, train junior staff, and execute ultra-luxury finishes without needing constant supervision.
              </p>
            </div>

            <div className="bg-zinc-50 p-6 border border-zinc-100 rounded-sm">
              <CheckCircle className="text-zinc-400 mb-4" size={24} />
              <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Zero-Incident Record</h3>
              <p className="text-zinc-600 font-light text-sm leading-relaxed">
                Across 26+ years in demanding environments like the UAE, Qatar, and Oman, I maintain a 100% zero-incident safety record. I strictly adhere to international OHS standards in every project I undertake.
              </p>
            </div>
          </div>
        </motion.div>
        {/* --- END "Why Sponsor Me?" --- */}

        {/* --- ORIGINAL FOOTER CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-zinc-100 border border-zinc-200 p-10 md:p-16 mb-20 relative rounded-sm text-center md:text-left flex flex-col md:flex-row md:items-center justify-between shadow-soft"
        >
          <Landmark className="absolute right-0 top-0 w-64 h-64 text-zinc-200 opacity-40 pointer-events-none -translate-y-10 translate-x-10" />
          
          <div className="relative z-10 max-w-2xl mb-8 md:mb-0">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-zinc-900 leading-tight">Western Australia Employers</h2>
            <p className="text-zinc-600 leading-relaxed text-lg font-light">
              Eligible candidate for Subclass 482 Sponsorship. Fully aware of the <span className="font-semibold text-zinc-900">WA DAMA</span> requirements and <span className="font-semibold text-zinc-900">CVSP</span> employer incentive frameworks.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <Link href="mailto:adityaprajapat28@gmail.com?subject=Visa Sponsorship Inquiry - Master Tiler" 
               className="inline-flex items-center justify-center space-x-3 bg-zinc-900 text-zinc-50 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors duration-300 shadow-soft">
              <Mail size={18} strokeWidth={1.5} />
              <span>Initiate Inquiry</span>
            </Link>
            
            {/* Yahan aapka GDrive ka Link Set kar diya hai */}
            <a href="https://drive.google.com/file/d/1taJu8U4-9weDgoUN5c-Uj9x17PnVm2JA/view?usp=sharing" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center space-x-3 border border-zinc-300 bg-white text-zinc-800 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-zinc-500 hover:text-zinc-900 transition-all duration-300">
              <FileText size={18} strokeWidth={1.5} />
              <span>Download Detailed Portfolio (PDF)</span>
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-widest uppercase text-zinc-400 pt-8 border-t border-zinc-100">
          <p>© {new Date().getFullYear()} Master Wall & Floor Tiler. All rights reserved.</p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0 text-zinc-500">
            <span>ANZSCO Code: 333411</span>
            <span>WA DAMA Eligible</span>
          </div>
        </div>
      </div>
    </footer>
  );
}