// File: components/ExpertiseSafety.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Crosshair, Waves, Hammer } from "lucide-react";

// (Keep the same expertiseData array)
const expertiseData = [
  { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: "100% Zero-Incident OHS", desc: "Impeccable 26-year safety track record. Deeply ingrained culture of pristine site management, hazard mitigation, and silica dust control." },
  { icon: <Crosshair size={28} strokeWidth={1.5} />, title: "Laser Level Precision", desc: "Expert utilization of multi-line laser levels for flawless set-outs. Perfect alignment on large-format rectified porcelain over expansive commercial floors." },
  { icon: <Hammer size={28} strokeWidth={1.5} />, title: "Wet Tile Saws & Tooling", desc: "Mastery of advanced wet tile saws and heavy-duty angle grinders for exact cuts, mitred external corners, and complex architectural penetrations." },
  { icon: <Waves size={28} strokeWidth={1.5} />, title: "Epoxy Grouting", desc: "Specialized in the precise application of chemical-resistant epoxy grouts for high-traffic, hygienic, and premium wet-area environments." }
];

export default function ExpertiseSafety() {
  return (
    <section id="expertise" className="py-32 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl text-zinc-900 font-bold mb-6">Expertise & Safety Protocols</h2>
          <div className="w-12 h-[2px] bg-zinc-400 mx-auto mb-8"></div>
          <p className="text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Calibrated for the rigorous safety and quality demands of Australian Tier-1 HR and site management. Ready to integrate immediately with local compliance frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="p-10 border border-zinc-200 bg-white hover:border-zinc-300 transition-colors duration-500 rounded-sm shadow-soft group"
            >
              <div className="text-zinc-400 mb-8 transition-transform group-hover:-translate-y-1 duration-500">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-zinc-900">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}