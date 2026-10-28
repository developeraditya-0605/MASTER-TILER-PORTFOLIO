// File: components/GlobalFootprint.tsx
"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Calendar } from "lucide-react";

const locations = [
  { 
    period: "2025 - Present", 
    country: "Kuwait", 
    flagCode: "kw",
    focus: "Large-Format Porcelain & Stone", 
    desc: "Currently executing large-format porcelain and stone installations under extreme weather conditions. Strict adherence to international OHS standards.", 
    highlight: false 
  },
  { 
    period: "2014-2024", 
    country: "Qatar (10-Year Tenure)", 
    flagCode: "qa",
    focus: "Contracting, Leadership & Luxury Finishes", 
    desc: "Executed complex marble installations for luxury properties. Operated as an Independent Contractor for 7 years, demonstrating strong site leadership and the capability to train and mentor junior tradesmen. Directly managed the procurement and importation of premium Kishangarh marble for high-value projects.", 
    highlight: true 
  },
  { 
    period: "2009-2014", 
    country: "Oman", 
    flagCode: "om",
    focus: "High-End Residential Contracting", 
    desc: "High-end residential contracting, custom stone layouts, and advanced surface preparation.", 
    highlight: false 
  },
  { 
    period: "2005-2009", 
    country: "UAE (Dubai)", 
    flagCode: "ae",
    focus: "High-Tolerance Architectural Finishing", 
    desc: "High-tolerance architectural finishing and wet area waterproofing for luxury apartments.", 
    highlight: false 
  },
  { 
    period: "1999-2005", 
    country: "India", 
    flagCode: "in",
    focus: "Foundation & Premium Masonry", 
    desc: "Foundation of masonry, procurement of premium stones, and high-value residential tiling.", 
    highlight: false 
  }
];

export default function GlobalFootprint() {
  return (
    <section id="experience" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <h2 className="font-serif text-4xl text-zinc-900 font-bold mb-6">The Global Footprint</h2>
          <div className="w-12 h-[2px] bg-zinc-300 mb-8"></div>
          <p className="text-zinc-600 leading-relaxed mb-12 font-light text-lg">
            Forged over two decades across the most demanding architectural environments in the Middle East and Asia. 
            Accustomed to extreme climates, luxury tolerances, and diverse structural engineering standards.
          </p>
          
          <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-sm shadow-soft">
            <MessageSquareQuote className="text-zinc-400 mb-5" size={28} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-zinc-900 font-semibold mb-3">Language & Mentorship</h3>
            <p className="text-zinc-600 leading-relaxed font-light">
              Fluent in the universal language of precision construction. Complete mastery in interpreting international blueprints, safety protocols, and actively training teams to meet elite standards.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-7 relative pl-8 md:pl-12 border-l border-zinc-200 mt-10 md:mt-0">
          {locations.map((loc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`mb-12 relative group ${loc.highlight ? "bg-zinc-50 p-6 -ml-6 rounded-sm border border-zinc-200 shadow-soft" : ""}`}
            >
              <div className={`absolute ${loc.highlight ? "-left-[17px] md:-left-[33px] top-7" : "-left-[41px] md:-left-[57px] top-1"} w-4 h-4 bg-white border-2 border-zinc-400 rounded-full group-hover:bg-zinc-600 transition-colors duration-500`} />
              
              <div className="flex items-center space-x-3 mb-1">
                <Calendar size={14} className="text-zinc-500" strokeWidth={2} />
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">{loc.period}</span>
              </div>
              
              <div className="flex items-center space-x-3 mb-2 mt-2">
                {/* Yahan asli flag image render ho rahi hai */}
                <img 
                  src={`https://flagcdn.com/w40/${loc.flagCode}.png`} 
                  alt={`${loc.country} Flag`} 
                  className="w-7 h-auto rounded-[2px] shadow-sm border border-zinc-200"
                />
                <h4 className="font-serif text-2xl font-bold text-zinc-900">{loc.country}</h4>
              </div>
              
              <h5 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">{loc.focus}</h5>
              <p className="text-zinc-600 leading-relaxed font-light">{loc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}