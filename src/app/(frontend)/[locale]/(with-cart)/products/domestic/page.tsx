"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; 
import ProductGrid from "./ProductTires";
import Modelmap from "@/frontendComponents/Home/Modelmap";
import SliderBrand from "@/frontendComponents/Home/SliderBrand";
import Uslogo from "@/frontendComponents/Home/Uslogo";


// -------------------------------------------------------------------------- 
// TYPES
// -------------------------------------------------------------------------- 

type FAQItem = {
  question: string;
  answer: string;
};

// -------------------------------------------------------------------------- 
// CONSTANTS
// -------------------------------------------------------------------------- 

const DOMESTIC_FAQS: FAQItem[] = [
  {
    question: "How long does domestic shipping take?",
    answer: "For domestic orders, we usually deliver within 3-5 business days. We ship out your product on the same day if ordered before 12 PM.",
  },
  {
    question: "Is shipping free within the country?",
    answer: "Yes! We offer FREE shipping on all domestic orders above a minimum value. For smaller orders, a standard shipping fee applies.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, COD is available for select pin codes. You can check availability at checkout by entering your zip code.",
  },
  {
    question: "How do you ensure product freshness?",
    answer: "Our products are packed directly from the factory line using premium nitrogen-flushed packaging to ensure they stay crispy and fresh for up to 6 months.",
  },
  {
    question: "Can I return the products if I don't like them?",
    answer: "Due to the perishable nature of food products, we do not accept returns. However, if you receive a damaged package, please contact us within 24 hours for a replacement.",
  },
];

// -------------------------------------------------------------------------- 
// MAIN COMPONENT
// -------------------------------------------------------------------------- 

export default function DomesticProductsPage() {
  
  return (
    <main className="w-full bg-white text-neutral-900">
      {/* ========================== HERO ========================== */}
      <section
        className="relative w-full overflow-hidden pt-[112px]"
        style={{
          backgroundImage: "url('/assets/Image/bg-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[260px] max-w-7xl items-center justify-center px-5 py-14 sm:px-6 md:min-h-[320px] md:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold uppercase tracking-tight text-black md:text-5xl">
              Domestic Products (US) 
            </h1>
          </div>
        </div>
      </section>

      <ProductGrid />
      
      {/* ========================== ModelMap ========================== */}
      <Modelmap />
      
      {/* ========================== FAQ Section ========================== */}
      <FAQSection />

       <Uslogo />

       <SliderBrand/>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ COMPONENTS */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <section className="bg-neutral-50 py-24 border-t border-neutral-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {DOMESTIC_FAQS.map((faq, idx) => (
            <Accordion key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? <FaMinus size={14} className="text-amber-600" /> : <FaPlus size={14} className="text-gray-400" />}
      </button>

      {isOpen && (
        <div className="px-5 pb-5 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}