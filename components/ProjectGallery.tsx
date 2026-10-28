// File: components/ProjectGallery.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
  "All", 
  "Luxury Floor Inlays", 
  "Premium Wall Cladding", 
  "Custom Marble Features", 
  "Precision Staircases", 
  "Custom Mosaics & Ceiling Art"
];

const galleryData = [
  // --- Luxury Floor Inlays (10 Items) ---
  { id: 1, type: "Luxury Floor Inlays", media: "image", format: "portrait", src: "https://i.postimg.cc/g21Y49qX/1000235407-jpg.jpg", title: "High-Gloss Premium Marble Flooring" },
  { id: 2, type: "Luxury Floor Inlays", media: "image", format: "landscape", src: "https://i.postimg.cc/QxwGZQ93/IMG-20261025-WA0021-jpg.jpg", title: "Precision Vein-Matched Italian Marble" },
  { id: 3, type: "Luxury Floor Inlays", media: "image", format: "portrait", src: "https://i.postimg.cc/sgYnH755/1000235410-jpg.jpg", title: "Seamless Joint Detailing & Finish" },
  { id: 4, type: "Luxury Floor Inlays", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793098724045-a7db1e69-6dd5-470c-9854-e1e6240e74f6.mp4", title: "Luxury Marble Layout Walkthrough" },
  { id: 5, type: "Luxury Floor Inlays", media: "image", format: "portrait", src: "https://i.postimg.cc/RZXM8nMt/1000235574-jpg.jpg", title: "Bespoke Makrana Marble Medallion" },
  { id: 6, type: "Luxury Floor Inlays", media: "image", format: "portrait", src: "https://i.postimg.cc/CMBzqJwW/1000234722-jpg.jpg", title: "Customized Marble Medallion" },
  { id: 7, type: "Luxury Floor Inlays", media: "image", format: "portrait", src: "https://i.postimg.cc/PrMhp8vS/1000235576-jpg.jpg", title: "Luxury Floor Inlay Medallion" },
  { id: 8, type: "Luxury Floor Inlays", media: "image", format: "landscape", src: "https://i.postimg.cc/sx4Fhtx5/1000234740-jpg.jpg", title: "Grand Makrana Medallion Layout" },
  { id: 9, type: "Luxury Floor Inlays", media: "image", format: "landscape", src: "https://i.postimg.cc/SxtBCLSG/1000234743-jpg.jpg", title: "Exclusive Marble Medallion Design" },
  { id: 10, type: "Luxury Floor Inlays", media: "image", format: "portrait", src: "https://i.postimg.cc/3NcXnwkM/1000235575-jpg.jpg", title: "Classic Makrana Floor Art" },

  // --- Premium Wall Cladding (7 Items) ---
  { id: 11, type: "Premium Wall Cladding", media: "image", format: "portrait", src: "https://i.postimg.cc/gj2ZPwtJ/IMG-20261025-WA0051-jpg.jpg", title: "Double Height Grand Cladding" },
  { id: 12, type: "Premium Wall Cladding", media: "image", format: "portrait", src: "https://i.postimg.cc/RCJ3wBrt/IMG-20261025-WA0041-jpg.jpg", title: "Vertical Brass & Stone Integration" },
  { id: 13, type: "Premium Wall Cladding", media: "image", format: "portrait", src: "https://i.postimg.cc/y8G4mwCL/IMG-20261025-WA0034-jpg.jpg", title: "Precision Elevator Surround" },
  { id: 14, type: "Premium Wall Cladding", media: "image", format: "landscape", src: "https://i.postimg.cc/1X7Jx1H8/IMG-20261025-WA0028-jpg.jpg", title: "Seamless Marble Canvas" },
  { id: 15, type: "Premium Wall Cladding", media: "image", format: "portrait", src: "https://i.postimg.cc/PxRwTXgC/IMG-20261025-WA0074-jpg.jpg", title: "Intricate Herringbone Wall Pattern" },
  { id: 16, type: "Premium Wall Cladding", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793100855949-fb1ad47e-4fe0-4236-a463-f5650369e615.mp4", title: "Double Height Wall Cladding" },
  { id: 17, type: "Premium Wall Cladding", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793100934857-37290f88-62a1-4408-b8dc-d2ed2e1f641d.mp4", title: "Premium Bathroom Marble Cladding" },

  // --- Custom Marble Features (10 Items) ---
  { id: 18, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/Vkm3PnXT/IMG-20261025-WA0072-jpg.jpg", title: "Shower Niche with Profile Light Wiring" },
  { id: 19, type: "Custom Marble Features", media: "image", format: "landscape", src: "https://i.postimg.cc/h4Mm0qpV/20261027-173043.jpg", title: "Luxury Shower Niche" },
  { id: 20, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/g2GktwjP/IMG-20261025-WA0031-jpg.jpg", title: "Bespoke Cross-Matched Panel" },
  { id: 21, type: "Custom Marble Features", media: "image", format: "landscape", src: "https://i.postimg.cc/ZKT1168f/1000235449-jpg.jpg", title: "Integrated Wood & Marble Unit" },
  { id: 22, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/pdYQb5Y7/IMG-20261025-WA0054-jpg.jpg", title: "Luxury Vanity Counter" },
  { id: 23, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/TYYZpNVz/1800ce4bf94cad608ded72dbe5775d50-jpg.jpg", title: "Bespoke Floating Stone Trough" },
  { id: 24, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/c4b56x4Q/789e974bb61ae246e6732a749459e9e2-jpg.jpg", title: "Sleek Monolithic Marble Sink" },
  { id: 25, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/8CV4rj8z/5d86550faf0c3a594952e1ad38d9ae41-jpg.jpg", title: "Floating Marble Drawer Console" },
  { id: 26, type: "Custom Marble Features", media: "image", format: "portrait", src: "https://i.postimg.cc/FzqgFKgY/67557b33db63871f90b4f49c9b3f3676-jpg.jpg", title: "Premium Grey Marble Double Vanity" },
  { id: 27, type: "Custom Marble Features", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793103828284-88e5f9ea-7da6-4683-9154-c10200d8fe72.mp4", title: "Premium Wall Niche with Lighting" },

  // --- Precision Staircases (6 Items) ---
  { id: 28, type: "Precision Staircases", media: "image", format: "portrait", src: "https://i.postimg.cc/HnzBT3c5/1000235487-jpg.jpg", title: "Architectural Floating Stair Treads" },
  { id: 29, type: "Precision Staircases", media: "image", format: "landscape", src: "https://i.postimg.cc/R0PSnxkN/1000235485-jpg.jpg", title: "Bespoke Balustrade & Stair Integration" },
  { id: 30, type: "Precision Staircases", media: "image", format: "landscape", src: "https://i.postimg.cc/90dsZGDN/1000235486-jpg.jpg", title: "Classic Marble Balustrade & Stair Design" },
  { id: 31, type: "Precision Staircases", media: "image", format: "portrait", src: "https://i.postimg.cc/MTTpTFNn/1000235483-jpg.jpg", title: "Precision Mitred Stair Detailing" },
  { id: 32, type: "Precision Staircases", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793108082516-f7b87601-6393-46ff-8ce8-d947e319e2a2.mp4", title: "Dark Marble Stair Construction & Finish" },
  { id: 33, type: "Precision Staircases", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793108176395-369c7167-15a9-474d-b876-2bfd149b5a60.mp4", title: "Helical Staircase Architectural Walkthrough" },

  // --- Custom Mosaics & Ceiling Art (3 Items) ---
  { id: 34, type: "Custom Mosaics & Ceiling Art", media: "image", format: "landscape", src: "https://i.postimg.cc/ht9m7s1n/1000234872-jpg.jpg", title: "Intricate Ceiling Mosaic Art" },
  { id: 35, type: "Custom Mosaics & Ceiling Art", media: "image", format: "landscape", src: "https://i.postimg.cc/DfrS26nF/1000234830-jpg.jpg", title: "Bespoke Ceiling Mosaic Design" },
  { id: 36, type: "Custom Mosaics & Ceiling Art", media: "video", format: "portrait", src: "https://videotourl.com/videos/1793115046913-faeec7cd-b399-4747-8d2f-da0421cd51f0.mp4", title: "Ceiling Art Assembly & Layout" }
];

export default function ProjectGallery() {
  const [active, setActive] = useState("All");
  const displayedProjects = galleryData.filter(p => active === "All" || p.type === active);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-zinc-900 mb-6">The Proof</h2>
          <div className="w-12 h-[2px] bg-zinc-300 mx-auto mb-10"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-sm ${
                  active === filter 
                    ? "bg-zinc-900 text-white shadow-soft" 
                    : "bg-zinc-50 border border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-zinc-50 p-2 rounded-sm shadow-soft border border-zinc-100 group w-full h-fit"
              >
                <div className={`overflow-hidden rounded-sm relative ${project.format === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'} bg-zinc-200`}>
                  {project.src ? (
                    project.media === "video" ? (
                      <video 
                        src={project.src} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    ) : (
                      <img 
                        src={project.src} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-serif italic text-sm bg-zinc-100">
                       [ {project.media === "video" ? "Video" : "Image"} Placeholder ]
                    </div>
                  )}
                </div>
                <div className="mt-4 px-2 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{project.type}</span>
                  <h3 className="font-serif text-lg font-bold text-zinc-900 mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}