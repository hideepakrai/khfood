import React from "react";
import { setRequestLocale } from "next-intl/server";

import { type Locale } from "@/i18n/config";
import AboutHero from "@/frontendComponents/About/AboutHero";
import AboutSection from "@/frontendComponents/Home/Aboutus";
import OurStorySection from "@/frontendComponents/sections/OurStorySection";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const dynamic = "force-dynamic";

export default async function AboutPage(props: Props) {
  const params = await props.params;
  const locale = params?.locale || "en";
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white">
      {/* Immersive Heritage Hero (Client Component encapsulation) */}
      <AboutHero />
      
      {/* Introduction Section */}
      <AboutSection />
      
      {/* Detailed Story Section */}
      <OurStorySection />
    </main>
  );
}
