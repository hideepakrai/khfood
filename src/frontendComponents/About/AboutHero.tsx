"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] bg-[#fdfbf9] flex items-center overflow-hidden pt-28 pb-16 lg:pb-0">
      
      {/* Decorative background circle */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-amber-50/50 blur-3xl" />
      
      {/* Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left: Text Content */}
        <div className="text-left lg:col-span-5 relative z-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-amber-200/50 bg-white shadow-sm mb-6 mt-10 md:mt-0"
          >
            <p className="text-[#ecb984] uppercase tracking-[0.3em] text-[10px] md:text-xs font-black">
              A Legacy Since 1991
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-heading font-bold uppercase text-slate-900 leading-[0.95] text-[56px] sm:text-[80px] md:text-[90px] xl:text-[110px] tracking-tight mb-8"
          >
            OUR <br /> <span className="text-[#ecb984]">STORY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl font-medium tracking-widest uppercase text-slate-500 max-w-sm border-l-2 border-[#ecb984] pl-4"
          >
            From a California Kitchen to the World
          </motion.p>
        </div>

        {/* Right: Images Composition Gallery */}
        <div className="relative h-[550px] sm:h-[650px] lg:h-[80vh] w-full lg:col-span-7 flex justify-center items-center">
          
          {/* Main Large Center Image */}
          <motion.div 
             style={{ y: y1 }}
             initial={{ opacity: 0, scale: 0.95, y: 50 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
             className="absolute left-[5%] top-[10%] w-[55%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-20"
          >
            <div className="absolute inset-0 bg-black/10 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&w=800&q=80" 
              alt="Roasting Peanuts"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </motion.div>

          {/* Bottom Right Highlight Image */}
          <motion.div 
             style={{ y: y2 }}
             initial={{ opacity: 0, scale: 0.8, x: 50 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="absolute right-[5%] bottom-[12%] w-[45%] h-[45%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-30 ring-[12px] ring-[#fdfbf9]"
          >
            <img 
              src="https://khfood.com/wp-content/uploads/2019/11/2Q6A4622-3-scaled.jpg" 
              alt="KH Food Premium Selection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
            {/* Small floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl hidden sm:block">
               <p className="text-[#ecb984] font-black text-xs uppercase tracking-wider">Premium Grade</p>
            </div>
          </motion.div>

          {/* Top Right Atmospheric Image */}
          <motion.div 
             style={{ y: y3 }}
             initial={{ opacity: 0, y: -40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.8 }}
             className="absolute top-[5%] right-[15%] w-[35%] h-[35%] rounded-[2rem] overflow-hidden shadow-lg z-10 opacity-90"
          >
            <img 
              src="https://images.unsplash.com/photo-1621644342358-71e98822502f?auto=format&w=600&q=80" 
              alt="Vintage tradition"
              className="w-full h-full object-cover filter sepia-[0.3]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
