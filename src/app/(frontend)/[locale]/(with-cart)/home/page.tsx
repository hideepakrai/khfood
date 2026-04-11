import AboutSection from "@/frontendComponents/Home/Aboutus";
import FeaturedWorks from "@/frontendComponents/Home/FeaturedWorks";
import Hero from "@/frontendComponents/Home/Hero";
// import NewsLatter from "@/frontendComponents/Home/NewsLatter";
import NewsSection from "@/frontendComponents/Home/NewsSection";
import NewsSectionCopy from "@/frontendComponents/Home/NewsSectionCopy";
import OurWork from "@/frontendComponents/Home/OurWork";
import ProductSection from "@/frontendComponents/Home/ProductSection";
import ProductSectionCopy from "@/frontendComponents/Home/ProductSectionCopy";
import SliderBrand from "@/frontendComponents/Home/SliderBrand";
import NewOneSection from "@/frontendComponents/Home/NewOneSection"
import TestimonialsSection from "@/frontendComponents/Home/TestimonialsSection";
import BlogSection from "@/frontendComponents/sections/BlogSection";
import OurStorySection from "@/frontendComponents/sections/OurStorySection";
import { getHotspotProducts } from "@/data/storefront/ecommerce";
import type { Locale } from "@/i18n/config";

type Args = {
  params: Promise<{
    locale: Locale;
  }>;
};

export const dynamic = "force-dynamic";

const HomePage = async (props: Args) => {
  const params = await props.params;
  const locale = params?.locale || 'en';
  const hotspotRaw = await getHotspotProducts({ locale: locale as Locale, limit: 4 });
  
  const dynamicProducts = hotspotRaw.map((p: any) => {
    let imageUrl = "/assets/2Q6A4963.jpg";
    if (p.images && p.images.length > 0) {
      const img = p.images[0];
      if (typeof img === 'object' && img !== null && 'url' in img) {
        imageUrl = img.url || imageUrl;
      }
    }
    const priceValue = p.pricing && p.pricing.length > 0 ? p.pricing[0].value : 0;
    
    let badgeText = undefined;
    if (p.Highlight) {
      badgeText = p.Highlight;
    } else if (p.title && p.title.includes(":")) {
      const parts = p.title.split(":");
      if (parts.length > 1) {
        badgeText = parts[1].split("(")[0].trim();
      }
    }
    
    return {
      id: p.id,
      title: typeof p.title === 'object' ? p.title?.[locale as keyof typeof p.title] || p.title?.en || "Untitled" : p.title,
      price: "$" + Number(priceValue).toFixed(2),
      image: imageUrl,
      badge: typeof badgeText === 'object' ? badgeText?.[locale as keyof typeof badgeText] || badgeText?.en : badgeText
    };
  });

  return (
    <main>
      {/* <HeroSection/> */}
      <Hero />

      <AboutSection />
      <OurWork />
      {/* <FeaturedWorks /> */}

      {/* <FeaturedProjects /> */}
      {/* <ProductSection /> */}
      <ProductSection />

      <ProductSectionCopy products={dynamicProducts} />
      {/* <NewsSection /> */}
      
      <NewsSectionCopy />
      <TestimonialsSection />
      <BlogSection />
      <OurStorySection/>
      <SliderBrand />
      <NewOneSection />
      {/* <NewsLatter /> */}
    </main>
  );
};
export default HomePage;
