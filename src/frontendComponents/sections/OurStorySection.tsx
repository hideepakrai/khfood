"use client";

import { useState } from "react";

export default function OurStory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-[#f8f9fa] py-20 md:py-28">
      <div className="max-w-7xl px-6  mx-auto md:px-6 text-center">
        {/* Top Label */}
        <p className="text-[12px] tracking-[0.3em] uppercase text-amber-600 mb-4 font-bold">
          Our Heritage
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-[#111111] mb-8 uppercase">
          A Legacy of Quality and Care
        </h2>

        {/* Paragraph 1 */}
        <p className="text-sm md:text-[18px] leading-relaxed text-gray-600 mb-6 max-w-4xl mx-auto">
          K H Food began in Orange County, California in 1991, when a young married couple who immigrated from Taiwan decided to build a peanut brand dedicated to quality and care. Their vision was simple but profound: to roast peanuts with only natural ingredients and no preservatives, focusing on real flavor and everyday health for families who love to snack.
        </p>

        {/* Paragraph 2 */}
        <p className="text-sm md:text-[18px] leading-relaxed text-gray-600 mb-6 max-w-4xl mx-auto">
          Over the years, that small idea became a steady promise: to process and manufacture some of the best peanuts in the world while staying true to careful sourcing and gentle roasting. We believe that snacking should be both a joy and a healthy choice.
        </p>

        {/* EXPANDABLE CONTENT */}
        {expanded && (
          <div className="space-y-6 mt-10 p-10 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
            <p className="text-sm md:text-[17px] leading-relaxed text-gray-700">
              Our unique roasting process is what sets us apart. By controlling the temperature and time with extreme precision, we bring out the "nutty" essence of every single peanut without the need for artificial flavorings or excessive oils.
            </p>
            <p className="text-sm md:text-[17px] leading-relaxed text-gray-700">
              Today, KH Food remains a family-owned business, committed to the same values that started it all in a small California kitchen. We are proud to share our tradition of excellence with your family.
            </p>
          </div>
        )}

        {/* VIEW MORE / VIEW LESS */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-14 flex items-center justify-center gap-3 text-sm tracking-widest transition-all mx-auto font-bold px-8 py-3 rounded-full border-2 
            ${expanded ? "text-amber-600 border-amber-600 bg-amber-50" : "text-gray-800 border-gray-200 hover:border-amber-400 hover:text-amber-600"}
          `}
        >
          {expanded ? "READ LESS" : "READ OUR FULL STORY"}
          <span
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>
      </div>
    </section>
  );
}
