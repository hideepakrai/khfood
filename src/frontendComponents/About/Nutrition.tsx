"use client";

import React from 'react';
import { 
  Heart, 
  Leaf, 
  Shield, 
  Sparkles, 
  ChevronRight,
  Accessibility,
  Activity,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import AboutPageHeader from '@/frontendComponents/sections/AboutPageHeader';

const NutritionPage = () => {
  return (
    <div className="min-h-screen bg-[#fffcf9] text-slate-900 overflow-hidden">
      <AboutPageHeader />


      {/* Hero Section - Minimalist & Premium */}
      <section 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="https://khfood.com/wp-content/uploads/2019/11/2Q6A4971.jpg" 
            className="w-full h-full object-cover"
            alt="Nutrition Background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-white/30 backdrop-blur-md mb-8"
          >
            <p className="text-[#ecb984] uppercase tracking-[0.5em] text-[10px] md:text-xs font-black">
              Nourishment & Health
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
            NUTRITION
          </motion.h1>
        </div>
      </section>
      
      
      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/50 skew-x-[-12deg] translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 text-center max-w-4xl mx-auto">
              <span className="uppercase tracking-widest text-xs font-bold text-[#ecb984] mb-3 block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-slate-950 mb-8">
                SIMPLICITY IS THE ULTIMATE <br /> <span className="text-[#ecb984]">SOPHISTICATION</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                Our peanuts are not only delicious and the perfect go-to snack, but they are also extremely healthy.
                Unlike mass-produced alternatives, we never compromise on our ingredients.
              </p>
            </div>
            
            <div className="lg:col-span-12 grid md:grid-cols-2 gap-8 mt-12">
               {/* Two Ingredients Spotlight */}
              <IngredientCard 
                title="SEA SALT"
                description="Only a dash of natural sea salt is added into our peanuts so they won't taste unnaturally salty and has just the right amount of flavor."
                image="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=800&q=80"
                delay={0.2}
              />
              <IngredientCard 
                title="PREMIUM PEANUTS"
                description="Freshly roasted in our industry, our peanuts are shipped on a regular basis to guarantee that only the most recent peanuts are packaged."
                image="https://images.unsplash.com/photo-1651004276154-0e42a8b98e2b?w=800&q=80"
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Nutrition Breakdown */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
                80% UNSATURATED <br /> <span className="text-[#ecb984]">ESSENTIAL FATS</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Peanuts are packed with rich nutrients like protein, minerals, antioxidants, and fiber. 
                  Fortunately, peanuts are 80% unsaturated fat! 
                </p>
                <p>
                  Unsaturated fats are actually essential to our health and are commonly used for 
                  energy and have also been known to help reduce cholesterol levels.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <span className="text-[#ecb984] text-4xl font-black block">8g</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Protein per serving</span>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <span className="text-green-500 text-4xl font-black block">0%</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Trans Fats</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Label Simulation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white text-slate-900 p-8 md:p-12 shadow-2xl rounded-sm font-sans relative"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ecb984]/10 rounded-bl-full" />
              <h3 className="text-3xl font-bold border-b-8 border-slate-900 pb-2 mb-2 uppercase">Nutrition Facts</h3>
              <p className="font-bold border-b border-slate-900 pb-1 mb-2">About 16 servings per container</p>
              <div className="flex justify-between font-bold text-lg mb-2">
                <span>Serving size</span>
                <span>1 oz (28g)</span>
              </div>
              <div className="border-t-[12px] border-slate-900 pt-1 mb-1">
                <div className="flex justify-between items-end border-b-4 border-slate-900 pb-1 mb-1">
                  <div>
                    <span className="text-xs font-black">Amount per serving</span>
                    <span className="text-3xl font-black block leading-none">Calories</span>
                  </div>
                  <span className="text-5xl font-black">170</span>
                </div>
              </div>
              <div className="text-right text-xs font-black border-b border-slate-900 pb-1 mb-1">% Daily Value*</div>
              <NutritionRow label="Total Fat" value="14g" dv="18%" bold />
              <NutritionRow label="Saturated Fat" value="2g" dv="10%" nested />
              <NutritionRow label="Trans Fat" value="0g" nested />
              <NutritionRow label="Cholesterol" value="0mg" dv="0%" bold />
              <NutritionRow label="Sodium" value="120mg" dv="5%" bold />
              <NutritionRow label="Total Carbohydrate" value="5g" dv="2%" bold />
              <NutritionRow label="Dietary Fiber" value="2g" dv="7%" nested />
              <NutritionRow label="Total Sugars" value="1g" nested />
              <NutritionRow label="Protein" value="8g" bold />
              <div className="border-t-[8px] border-slate-900 pt-2 mt-4 text-[10px] leading-tight">
                *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Link Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 text-amber-600">
            <Zap className="w-10 h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-slate-900 mb-6">EXPLORE MORE <span className="text-[#ecb984]">SCIENCE</span></h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
            Discover thousands of peer-reviewed studies on the benefits of daily peanut consumption through the Peanut Institute.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://peanut-institute.com/"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#ecb984] hover:bg-[#d8a773] text-slate-950 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-colors"
          >
            Visit Peanut Institute <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Footer Features */}
      <section className="bg-slate-950 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <Feature icon={<Shield />} title="Certified Pure" desc="No additives" />
          <Feature icon={<Activity />} title="Low GI" desc="Stable energy" />
          <Feature icon={<Heart />} title="Heart Wise" desc="Unsaturated fats" />
          <Feature icon={<Zap />} title="Energy Dense" desc="High protein" />
        </div>
      </section>
    </div>
  );
};

const IngredientCard = ({ title, description, image, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl"
  >
    <img src={image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    <div className="absolute inset-0 p-10 flex flex-col justify-end">
      <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed max-w-[300px]">{description}</p>
    </div>
  </motion.div>
);

const NutritionRow = ({ label, value, dv, bold, nested }: any) => (
  <div className={`flex justify-between py-1 border-b border-slate-900 ${nested ? 'pl-4' : ''} ${bold ? 'font-black' : 'font-medium'} text-sm`}>
    <div>
      <span>{label}</span>
      <span className="ml-1 text-slate-500 font-normal">{value}</span>
    </div>
    {dv && <span className="text-slate-900">{dv}</span>}
  </div>
);

const Feature = ({ icon, title, desc }: any) => (
  <div className="text-center group">
    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-[#ecb984] mx-auto mb-6 group-hover:bg-[#ecb984] group-hover:text-slate-950 transition-all duration-500">
      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
    </div>
    <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">{title}</h4>
    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{desc}</p>
  </div>
);

export default NutritionPage;