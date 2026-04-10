"use client";

import React, { useState, useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";
import { 
  Truck, 
  Leaf, 
  Flame, 
  Home, 
  ShieldCheck, 
  ArrowRight,
  ChevronDown
} from "lucide-react";
import AboutPageHeader from "@/frontendComponents/sections/AboutPageHeader";

/* -------------------------------------------------------------------------- */
/*                               DATA                                          */
/* -------------------------------------------------------------------------- */

const processSteps = [
  {
    id: "01",
    title: "Sustainably Grown",
    subtitle: "Originating in East-Southern Farms",
    description: "Our journey begins in the rich soil of East-Southern states, where we source only the finest, sustainably grown peanuts.",
    icon: <Leaf className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1599596081534-19062363116a?w=1200&q=80",
    color: "bg-emerald-500",
  },
  {
    id: "02",
    title: "Selection & Transport",
    subtitle: "Quality Check in Los Angeles",
    description: "Every batch is transported to our Los Angeles facility under temperature-controlled conditions to preserve natural oils.",
    icon: <Truck className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
    color: "bg-blue-500",
  },
  {
    id: "03",
    title: "Artisanal Roasting",
    subtitle: "Precision Mastery Since 1991",
    description: "We use a proprietary small-batch roasting method that locks in crunch and flavor without any artificial additives.",
    icon: <Flame className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1544434261-29e2954a2f8b?w=1200&q=80",
    color: "bg-amber-600",
  },
  {
    id: "04",
    title: "Eco-Friendly Delivery",
    subtitle: "Straight to Your Doorstep",
    description: "Freshly packed in nitrogen-flushed packages to ensure they reach you exactly as they left our roasters.",
    icon: <Home className="h-8 w-8" />,
    image: "https://khfood.com/wp-content/uploads/2019/12/Image-1.jpg",
    color: "bg-indigo-500",
  },
];

/* -------------------------------------------------------------------------- */
/*                            COMPONENTS                                       */
/* -------------------------------------------------------------------------- */

const Page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden" ref={containerRef}>
      <AboutPageHeader />

      {/* Hero: Immersive Visuals */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="https://khfood.com/wp-content/uploads/2019/12/Image-1.jpg" 
              className="w-full h-full object-cover opacity-50"
              alt="Process Background"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-white/30 backdrop-blur-md mb-8"
          >
            <p className="text-[#ecb984] uppercase tracking-[0.5em] text-[10px] md:text-xs font-black">
              Quality Without Compromise
            </p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold uppercase text-white leading-[0.95] text-[48px] sm:text-[80px] md:text-[110px] lg:text-[120px] tracking-tight"
            style={{ 
              textShadow: "0 10px 40px rgba(0,0,0,0.4)"
            }}
          >
            FARM TO  <span className="text-[#ecb984]">HOME</span>
          </motion.h1>
          <p className="mt-8 text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Experience the journey of the perfect peanut. From sunlight and soil to your kitchen table.
          </p>
          <div className="mt-12 flex justify-center">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Process Storyboard */}
      <section className="py-24 md:py-40 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sticky Navigation Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-full group text-left p-6 rounded-[2rem] transition-all duration-500 border ${
                      activeStep === index 
                      ? 'bg-white shadow-2xl border-transparent scale-105' 
                      : 'border-slate-200 hover:border-amber-200 bg-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xl font-black transition-colors ${
                        activeStep === index ? 'text-[#ecb984]' : 'text-slate-300'
                      }`}>
                        {step.id}
                      </span>
                      <div>
                        <h3 className={`text-lg font-bold transition-colors ${
                          activeStep === index ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                          activeStep === index ? 'text-[#ecb984]' : 'text-slate-400'
                        }`}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ecb984]/10 rounded-bl-full" />
                <h4 className="text-xl font-bold uppercase mb-4">Did You Know?</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our roasting process is supervised by master roasters who have been with KH Food for over 20 years.
                </p>
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="lg:col-span-8 min-h-[600px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-12"
                >
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                    <img 
                      src={processSteps[activeStep].image} 
                      className="w-full h-full object-cover" 
                      alt={processSteps[activeStep].title}
                    />
                    <div className={`absolute top-8 right-8 w-16 h-16 ${processSteps[activeStep].color} rounded-full flex items-center justify-center text-white shadow-xl`}>
                      {processSteps[activeStep].icon}
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-slate-950 leading-tight mb-8">
                      {processSteps[activeStep].title}
                    </h2>
                    <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-10">
                      {processSteps[activeStep].description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl">
                        <ShieldCheck className="w-8 h-8 text-[#ecb984] mb-4" />
                        <h4 className="font-bold mb-2">Quality Guarantee</h4>
                        <p className="text-sm text-slate-500">Every single nut is scanned for perfection before being packaged.</p>
                      </div>
                      <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl">
                        <Truck className="w-8 h-8 text-[#ecb984] mb-4" />
                        <h4 className="font-bold mb-2">Swift Transit</h4>
                        <p className="text-sm text-slate-500">We ship from our roaster within 24 hours of production.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 md:py-40 bg-amber-50 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-slate-950 mb-10 leading-tight">
              READY TO <span className="text-[#ecb984]">EXPERIENCE?</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
              Our small-batch peanuts sell out quickly. Join our legacy and taste the difference today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/shop" 
                className="group relative inline-flex items-center justify-center bg-slate-950 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 transition-transform group-hover:-translate-x-2">Explore the Shop</span>
                <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
              <a 
                href="/about/history" 
                className="text-slate-950 font-black uppercase tracking-widest hover:text-amber-700 transition-colors"
              >
                Read Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
