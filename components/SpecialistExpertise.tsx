// File: components/SpecialistExpertise.tsx
"use client";

import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Square, LayoutTemplate } from "lucide-react";

const expertise = [
  {
    icon: <LayoutTemplate size={32} strokeWidth={1.5} />,
    title: "Bespoke Tile Architecture",
    desc: "Unique ability to craft custom cabinets, shelves, and window frames entirely out of precision-cut tiles and luxury marble."
  },
  {
    icon: <Square size={32} strokeWidth={1.5} />,
    title: "Intricate Ceiling Art",
    desc: "Mastery in suspending and securing high-value marble and mosaics for dramatic overhead architectural features."
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "100% Zero-Incident OHS",
    desc: "Flawless safety track record over 26 years. Deeply ingrained culture of hazard mitigation and compliance with strict occupational health guidelines."
  },
  {
    icon: <Ruler size={32} strokeWidth={1.5} />,
    title: "Millimeter Tolerances",
    desc: "Expertise in managing large-format porcelain and book-matched marble slabs where alignment margins are virtually non-existent."
  }
];

export default function SpecialistExpertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-gray text-alabaster">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Specialist Expertise</h2>
          <div className="w-12 h-[2px] bg-matte-gold mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 border border-alabaster/10 bg-slate-gray/50 hover:bg-slate-gray transition-colors"
            >
              <div className="text-matte-gold mb-6">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-alabaster/60 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}