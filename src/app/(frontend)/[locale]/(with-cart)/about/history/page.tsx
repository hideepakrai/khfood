"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useInView 
} from "framer-motion";
import { 
  History, 
  Users, 
  Heart, 
  Quote,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import AboutPageHeader from "@/frontendComponents/sections/AboutPageHeader";
import NewOneSection from "@/frontendComponents/Home/NewOneSection";

/* -------------------------------------------------------------------------- */
/*                               DATA                                          */
/* -------------------------------------------------------------------------- */

const timelineEvents = [
  {
    year: "1991",
    title: "The California Dream",
    description: "A young married couple from Taiwan immigrates to Orange County, CA. With a shared passion for quality, they begin roasting peanuts in their own kitchen, focusing on natural ingredients and zero preservatives.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&q=80",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    year: "2002",
    title: "Expansion of Trust",
    description: "What started as a kitchen dream becomes a formal promise. We moved to our first dedicated facility, allowing us to perfect our 'gentle roasting' technique for a wider community.",
    image: "https://images.unsplash.com/photo-1563863753690-348633c7f938?w=800&q=80",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2015",
    title: "Heritage Reimagined",
    description: "Bridging three decades of tradition with modern standards. KH Food becomes synonymous with premium snacking, known for bringing out the 'nutty essence' without artificial flavorings.",
    image: "https://images.unsplash.com/photo-1621644342358-71e98822502f?w=800&q=80",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    year: "Today",
    title: "Global Legacy",
    description: "Still family-owned, still committed to the same California-Taiwan heritage. We are proud to share our tradition of excellence with families across the globe.",
    image: "/assets/khfood-img.png",
    icon: <Heart className="w-6 h-6" />,
  },
];

const values = [
  {
    title: "Pure Integrity",
    desc: "Only two ingredients. No preservatives. No artificial flavorings.",
    icon: <Sparkles className="text-[#ecb984]" />
  },
  {
    title: "Family Rooted",
    desc: "Started in a kitchen, grown through family values and dedication.",
    icon: <Users className="text-[#ecb984]" />
  },
  {
    title: "Masterful Craft",
    desc: "Precision temperature control to bring out natural flavors.",
    icon: <History className="text-[#ecb984]" />
  }
];

/* -------------------------------------------------------------------------- */
/*                            COMPONENTS                                       */
/* -------------------------------------------------------------------------- */

const Page = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <div className="bg-[#fffcf9] text-slate-900 overflow-hidden" ref={containerRef}>
      <AboutPageHeader />
      
      {/* Immersive Heritage Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroImageY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fffcf9] z-10" />
          <img 
            src="https://khfood.com/wp-content/uploads/2019/11/2Q6A4622-3-scaled.jpg" 
            alt="KH Food Heritage"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        
        <div className="relative z-20 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-white/30 backdrop-blur-md mb-8"
          >
            <p className="text-[#ecb984] uppercase tracking-[0.5em] text-[10px] md:text-xs font-black">
              A Legacy Since 1991
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
            OUR <span className="text-[#ecb984]">HISTORY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-lg md:text-xl font-medium tracking-widest uppercase text-white/80"
          >
            From a California Kitchen to the World
          </motion.p>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 text-center max-w-4xl mx-auto mb-20">
               <Quote className="w-16 h-16 text-[#ecb984]/20 mx-auto mb-8" />
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-slate-950 mb-8">
                BUILT ON <span className="text-[#ecb984]">INTEGRITY</span> AND A PASSION FOR REAL FLAVOR.
               </h2>
               <div className="w-24 h-2 bg-[#ecb984] mx-auto mb-10" />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="prose prose-lg max-w-none text-slate-600">
                <p className="text-xl font-bold text-slate-900 leading-relaxed mb-6">
                  In 1991, a small kitchen in Orange County became the birthplace of a promise. 
                </p>
                <p className="mb-6 leading-relaxed">
                  Founded by a young couple who immigrated from Taiwan, KH Food was born out of a desire for better snacks. 
                  They realized that most roasted peanuts were laden with preservatives and unhealthy processing. 
                </p>
                <p className="leading-relaxed">
                  Their solution was a proprietary small-batch roasting method that didn't need artificial additives. 
                  Today, that same precision temperature control is what brings out the "nutty" essence you love.
                </p>
              </div>
              
              <div className="mt-12 space-y-8">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-950 uppercase tracking-wide text-sm mb-1">{v.title}</h4>
                      <p className="text-slate-500 text-sm">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img 
                  src="https://khfood.com/wp-content/uploads/2019/11/2Q6A4622-3-scaled.jpg" 
                  className="w-full h-full object-cover"
                  alt="Traditional Roasting"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#ecb984] p-10 rounded-[2rem] hidden md:block">
                <p className="text-white text-4xl font-black">30+</p>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Years of Mastery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Master Timeline */}
      <section className="py-24 md:py-40 bg-[#fffcf9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="uppercase tracking-widest text-xs font-bold text-[#ecb984] mb-3 block">Every Milestone Counts</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">THE <span className="text-[#ecb984]">JOURNEY</span></h2>
          </div>

          <div className="relative">
            {/* Timeline Stroke */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            
            <div className="space-y-40">
              {timelineEvents.map((event, index) => (
                <TimelineCard key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://khfood.com/wp-content/uploads/2019/12/Image-1.jpg" className="w-full h-full object-cover" alt="bg" />
        </div>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">TASTE <br /> THE <span className="text-[#ecb984]">TRADITION</span></h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
            Our history is written in every batch. Join our community of flavor enthusiasts.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="/shop" 
              className="bg-[#ecb984] hover:bg-[#d8a773] text-slate-950 px-12 py-6 rounded-full font-bold uppercase tracking-widest transition-all shadow-2xl shadow-[#ecb984]/20 flex items-center gap-4"
            >
              Shop the Collection <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      <NewOneSection />
      
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

const TimelineCard = ({ event, index }: any) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Visual Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "circOut" }}
        className="flex-1 w-full"
      >
        <div className="relative group">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
             <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          </div>
          <div className={`absolute -bottom-8 ${isEven ? '-left-8' : '-right-8'} w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl text-[#ecb984] z-20 hidden md:flex`}>
            {event.icon}
          </div>
        </div>
      </motion.div>

      {/* Center Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          className="w-8 h-8 rounded-full bg-[#ecb984] border-[6px] border-[#fffcf9] shadow-xl"
        />
      </div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
        className="flex-1 w-full"
      >
        <div className={`${isEven ? 'md:text-left text-center' : 'md:text-right text-center'}`}>
          <span className="text-7xl md:text-9xl font-black text-slate-100 mb-2 block">{event.year}</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 uppercase leading-tight">{event.title}</h3>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            {event.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;