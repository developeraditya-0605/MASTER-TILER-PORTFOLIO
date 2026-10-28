// File: components/BeforeAfterSlider.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    // Set initial width and center the slider handle
    if (containerRef.current) {
      const elWidth = containerRef.current.offsetWidth;
      setWidth(elWidth);
      x.set(elWidth / 2);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        const elWidth = containerRef.current.offsetWidth;
        setWidth(elWidth);
        x.set(elWidth / 2);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [x]);

  // Transform X position to a percentage for the clip-path inset
  const clipPercentage = useTransform(x, [0, width], [0, 100]);
  const clipPath = useTransform(clipPercentage, (val) => `inset(0% ${100 - val}% 0% 0%)`);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] bg-zinc-200 overflow-hidden rounded-sm group select-none">
      
      {/* After Image (Background) */}
      <img src={afterSrc} alt="Finished surface" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      
      {/* Before Image (Foreground with Clip Path) */}
      <motion.div style={{ clipPath }} className="absolute inset-0 z-10 pointer-events-none">
        <img src={beforeSrc} alt="Substrate preparation" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>

      {/* Interactive Drag Handle */}
      <motion.div 
        style={{ x }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        className="absolute top-0 bottom-0 w-[2px] bg-zinc-400 z-20 cursor-ew-resize flex items-center justify-center -ml-[1px]"
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center border border-zinc-200 group-hover:scale-110 transition-transform duration-300">
          <MoveHorizontal size={18} className="text-zinc-600" strokeWidth={1.5} />
        </div>
      </motion.div>
      
      {/* UI Badges */}
      <div className="absolute top-4 left-4 z-30 bg-zinc-900/80 backdrop-blur-sm text-zinc-50 text-[10px] px-3 py-1.5 font-semibold tracking-widest uppercase rounded-sm">Substrate</div>
      <div className="absolute top-4 right-4 z-10 bg-zinc-900/80 backdrop-blur-sm text-zinc-50 text-[10px] px-3 py-1.5 font-semibold tracking-widest uppercase rounded-sm">Finished</div>
    </div>
  );
}