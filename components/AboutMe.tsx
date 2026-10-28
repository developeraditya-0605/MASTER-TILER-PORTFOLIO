// File: components/AboutMe.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutMe() {
  const highlights = [
    "49 years old: Bringing mature leadership, calm decision-making, and unmatched stability to high-pressure construction environments.",
    "26+ years of international expertise across India, UAE, Oman, Qatar, and Kuwait.",
    "100% Zero-Incident OHS Safety Record across complex global projects.",
    "Independent execution capability: Expert in reading complex architectural blueprints and managing high-value sites (including 7 years as an independent contractor in Qatar)."
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-zinc-200 relative border border-zinc-300 shadow-soft">
              
              <img 
                src="https://i.postimg.cc/TPtDh4qt/20250319-38777-jpg.png" 
                alt="Master Craftsman Portrait - Jitendra" 
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Master Craftsman</span>
                  <h3 className="text-white text-3xl font-semibold mt-1">Jitendra</h3>
                  <p className="text-zinc-200 text-sm mt-1">49 Years Old | 26+ Years Experience</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <h2 className="font-serif text-4xl text-zinc-900 font-bold mb-6">Master Craftsman & Leadership</h2>
            <div className="w-12 h-[2px] bg-zinc-400 mb-8"></div>
            
            <p className="text-zinc-600 leading-relaxed mb-8 font-light text-lg">
              Beyond precision tile setting, true craftsmanship requires absolute stability and site mastery. I bring decades of focused dedication to every project, ensuring timelines are met without compromising safety or quality.
            </p>

            <div className="space-y-5">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <CheckCircle2 className="text-zinc-400 mt-1 shrink-0" size={20} strokeWidth={1.5} />
                  <p className="text-zinc-700 leading-relaxed font-light">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-20 pt-16 border-t border-zinc-200"
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">Master in Action</h3>
            <p className="text-zinc-500 mt-3 text-sm uppercase tracking-widest font-bold">Hands-On Precision Work</p>
          </div>
          
          <div className="max-w-md mx-auto rounded-sm overflow-hidden bg-zinc-200 shadow-xl border border-zinc-300 relative aspect-[9/16]">
            <video 
              src="https://videotourl.com/videos/1793117380159-9f724f5d-92e6-4efa-905c-41c954ade3e2.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}