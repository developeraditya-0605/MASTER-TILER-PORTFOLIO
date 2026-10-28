// File: components/ComprehensiveSkills.tsx
"use client";

import { motion } from "framer-motion";
import { Hammer, CheckCircle2, DraftingCompass, Layers } from "lucide-react";

const highlightedSkills = [
  { title: "Bespoke Marble Joinery & Niches", desc: "Specialist in crafting custom floating vanities, bathroom cabinets, and seamless shower niches entirely from marble and stone." },
  { title: "Precision Staircase & Step Installation", desc: "Flawless mitred edges, step grouting, and heavy marble slab installations for high-traffic luxury staircases." },
  { title: "Premium Wall Cladding", desc: "Expert handling of heavy-duty stone and large-format porcelain for striking interior and exterior architectural feature walls." },
  { title: "Large-Format Marble & Tile Fixing", desc: "Millimeter-perfect installation of oversized, book-matched Kishangarh and Italian marble slabs." }
];

const generalSkills = [
  "Advanced Waterproofing (AS 3740 Compliance)",
  "Plastering & Substrate Preparation",
  "Epoxy & Chemical-Resistant Grouting",
  "Screeding & Floor Levelling",
  "Mosaic & Intricate Pattern Laying",
  "Outdoor Paving & Wet Area Sloping"
];

const advancedTools = [
  "Multi-Line Laser Levels for 100% True Alignment",
  "Heavy-Duty Wet Tile Saws & Diamond Blade Tooling",
  "Vacuum Suction Lifters for Large-Format Slabs",
  "Precision Angle Grinders for Custom Penetrations"
];

export default function ComprehensiveSkills() {
  return (
    <section id="skills" className="py-24 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl text-zinc-900 font-bold mb-6">Master Specialties & Technical Skills</h2>
          <div className="w-12 h-[2px] bg-zinc-400 mb-8"></div>
          <p className="text-zinc-600 leading-relaxed max-w-3xl font-light text-lg">
            A complete mastery over every aspect of masonry and tiling. From fundamental substrate preparation to the most intricate bespoke marble fabrication.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Highlighted Specialties */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6 flex items-center"><Layers className="mr-2" size={16} /> Core Masteries</h3>
            {highlightedSkills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-zinc-900 text-white p-6 rounded-sm shadow-soft border-l-4 border-zinc-400"
              >
                <h4 className="font-serif text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-zinc-400 font-light leading-relaxed text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-12">
            {/* General Skills */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6 flex items-center"><CheckCircle2 className="mr-2" size={16} /> Comprehensive Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {generalSkills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-zinc-50 border border-zinc-200 p-4 rounded-sm flex items-center space-x-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></div>
                    <span className="text-zinc-700 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Advanced Tooling */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6 flex items-center"><DraftingCompass className="mr-2" size={16} /> Advanced Tool Mastery</h3>
              <ul className="space-y-3">
                {advancedTools.map((tool, idx) => (
                  <li key={idx} className="flex items-start text-sm text-zinc-600 font-light">
                    <Hammer className="text-zinc-300 mr-3 shrink-0 mt-0.5" size={16} />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}