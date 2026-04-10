"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutPageHeader = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "HISTORY",
      subLabel: "Our History",
      href: "/en/about/history",
    },
    {
      label: "NUTRITION",
      subLabel: "Nutrition",
      href: "/en/about/nutrition",
    },
    {
      label: "PROCESS",
      subLabel: "Our Process",
      href: "/en/about/process",
    },
  ];

  return (
    <div className="pt-8">

    
    {/* <div className="w-full bg-white border-b border-gray-100 shadow-sm overflow-hidden pt-[112px]">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20 px-6 py-10 md:py-14">
  
        <div className="w-full md:w-[280px]">
          <Link href="/en/about">
            <h1 className="text-[36px] md:text-[44px] font-bold tracking-[0.02em] text-[#202020] hover:text-[#D6A574] transition-colors uppercase">
              ABOUT US
            </h1>
          </Link>
        </div>

       <div className="flex flex-1 flex-wrap justify-between items-center w-full">
          {navLinks.map((link, index) => {
            const isActive = pathname?.includes(link.href);
            return (
              <div 
                key={link.label} 
                className={`flex-1 min-w-[140px] px-4 lg:px-10 border-r border-[#e5e7eb] last:border-r-0 ${index === 0 ? 'md:pl-0' : ''}`}
              >
                <Link href={link.href} className="group">
                  <p className={`text-[14px] lg:text-[16px] font-extrabold uppercase tracking-[0.02em] transition-colors ${isActive ? 'text-[#D6A574]' : 'text-black group-hover:text-[#D6A574]'}`}>
                    {link.label}
                  </p>
                  <p className={`mt-2 text-[16px] lg:text-[18px] transition-colors ${isActive ? 'text-gray-900 border-b-2 border-[#D6A574]' : 'text-[#606060] group-hover:text-black italic'}`}>
                    {link.subLabel}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default AboutPageHeader;
