"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductGrid from "../domestic/ProductTires"; // Reusing the grid component
import Modelmap from "@/frontendComponents/Home/Modelmap";
import SliderBrand from "@/frontendComponents/Home/SliderBrand"; 
import Internationallogo from "@/frontendComponents/Home/Internationallogo";

/* -------------------------------------------------------------------------- */
/* TYPES */
/* -------------------------------------------------------------------------- */

type FAQItem = {
  question: string;
  answer: string;
};

/* -------------------------------------------------------------------------- */
/* CONSTANTS (FAQ DATA) */
/* -------------------------------------------------------------------------- */

const INTERNATIONAL_FAQS: FAQItem[] = [
  {
    question: "Do you ship KH Food products internationally?",
    answer: "Yes, we ship our premium namkeen and peanuts globally. We handle all export documentation to ensure smooth customs clearance.",
  },
  {
    question: "What is the Minimum Order Quantity (MOQ) for exports?",
    answer: "For air cargo, the MOQ is 100kg. For sea freight (LCL/FCL), the minimum order starts from 1 pallet. Contact our export team for bulk rates.",
  },
  {
    question: "How is freshness maintained for long-distance shipping?",
    answer: "We use industrial-grade 3-layer nitrogen-flushed packaging that guarantees freshness for up to 12 months, even during long transit times.",
  },
  {
    question: "Do you offer Private Labeling (White Labeling)?",
    answer: "Yes, we offer private labeling services for international distributors. We can customize the packaging design and weight according to your market needs.",
  },
  {
    question: "Who handles the customs duties for international orders?",
    answer: "For standard international shipments, customs duties and taxes are the responsibility of the buyer as per their country's regulations. We provide all necessary certificates (FDA, FSSAI, Phytosanitary).",
  },
];

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT */
/* -------------------------------------------------------------------------- */

export default function InternationalProductsPage() {
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
              International Products (TAIWAN)
            </h1>
          </div>
        </div>
      </section>

      {/* ========================== PRODUCT GRID ========================== */}
      <ProductGrid />

      {/* ========================== MODEL MAP ========================== */}
      <Modelmap />

      {/* ========================== FAQ ========================== */}
      <FAQSection />

      <Internationallogo />

      <SliderBrand />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ COMPONENTS */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div>
          {INTERNATIONAL_FAQS.map((faq, i) => (
            <Accordion key={`int-${i}`} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-white mb-4 shadow-sm overflow-hidden border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <div className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
           {open ? <FaMinus className="text-amber-600" /> : <FaPlus className="text-neutral-400" />}
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="p-5 pt-0 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}