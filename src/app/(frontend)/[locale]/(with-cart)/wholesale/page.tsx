"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Package, Globe, ShieldCheck, Truck, Users, Phone, Mail, Building2 } from "lucide-react";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ─── DATA ────────────────────────────────────────────────────────── */

const benefits = [
  {
    icon: <Package className="h-7 w-7" />,
    title: "Bulk & Flexible Packaging",
    desc: "Custom pack sizes from 1 lb retail to full pallet bulk orders.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Premium Quality Standards",
    desc: "USDA compliant, nitrogen-flushed packaging ensures 12-month shelf life.",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Global Export Ready",
    desc: "We handle FDA, phytosanitary, and export documentation for 30+ countries.",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Reliable Supply Chain",
    desc: "Direct from our La Puente, CA facility — consistent supply, zero compromise.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Long-Term Partnership",
    desc: "We grow with our partners. Dedicated account managers for wholesale buyers.",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Private Label Available",
    desc: "We manufacture under your brand. Custom labels, sizes, and formulations.",
  },
];

const steps = [
  { num: "01", title: "Send Inquiry", desc: "Fill out the form or email us with your requirements." },
  { num: "02", title: "Verification", desc: "Our team reviews your business profile within 24hrs." },
  { num: "03", title: "Custom Quote", desc: "Receive a tailored pricing sheet based on volume." },
  { num: "04", title: "Order & Deliver", desc: "Place your order and receive it fresh from our facility." },
];

const gallery = [
  { title: "GIFT BOXES", category: "Hot Deal", image: "https://khfood.com/wp-content/uploads/2019/12/Box-image.jpg" },
  { title: "WHOLESALE PACKS", category: "Bulk Order", image: "https://khfood.com/wp-content/uploads/2019/12/Image-3.jpg" },
  { title: "GLOBAL SHIPPING", category: "Export Ready", image: "https://khfood.com/wp-content/uploads/2019/12/Image-1.jpg" },
  { title: "OUR FACILITY", category: "Since 1991", image: "https://khfood.com/wp-content/uploads/2019/11/Screen-Shot-2019-07-16-at-1.11.14-PM@1X.png" },
];

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function WholesalePage() {
  const [formState, setFormState] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden pt-[112px]"
        style={{
          backgroundImage: "url('/assets/Image/bg-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center justify-center px-6 py-16 text-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-amber-700"
            >
              Partner With Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-6xl"
            >
              Wholesale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 max-w-xl mx-auto text-slate-600"
            >
              Premium peanuts. Flexible packaging. Global reach. 
              Join 200+ distributors who trust KH Food.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#inquiry"
                className="rounded-full bg-slate-900 px-8 py-3 font-black uppercase tracking-widest text-white hover:bg-amber-500 hover:text-black transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="mailto:contact@khfood.com"
                className="rounded-full border border-slate-300 px-8 py-3 font-black uppercase tracking-widest text-slate-700 hover:border-slate-700 transition-colors"
              >
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-amber-600">Why KH Food</p>
            <h2 className="text-3xl font-black text-slate-900 md:text-5xl">
              Built for Business Partners
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-8 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  {b.icon}
                </div>
                <h3 className="mb-2 text-lg font-black text-slate-900">{b.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20 md:py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-amber-400">Simple Process</p>
            <h2 className="text-3xl font-black md:text-5xl">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] right-[-40%] hidden h-px bg-white/10 md:block" />
                )}
                <div className="text-6xl font-black text-white/10 mb-3">{step.num}</div>
                <h3 className="text-lg font-black mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY SLIDER ───────────────────────────────────────── */}
      <section className="bg-black py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-black uppercase tracking-wide text-white md:text-5xl">
            Discover Our World
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="pb-14"
          >
            {gallery.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group relative block overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="mb-3 inline-block rounded-full bg-amber-500 px-3 py-1 text-[10px] font-black uppercase text-black">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── INQUIRY FORM ─────────────────────────────────────────── */}
      <section id="inquiry" className="bg-[#fffcf9] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-amber-600">Start Today</p>
            <h2 className="text-3xl font-black text-slate-900 md:text-5xl">Wholesale Inquiry</h2>
            <p className="mt-4 text-slate-500">
              Fill out the form below and our team will get back to you within one business day.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-white p-12 text-center shadow-xl border border-slate-100"
            >
              <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
              <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
              <p className="mt-3 text-slate-500">
                Thank you, {formState.name}. We'll reach out to{" "}
                <span className="font-bold text-slate-700">{formState.email}</span> shortly.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-slate-100 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your Name *">
                  <input
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:bg-white transition"
                  />
                </Field>
                <Field label="Company Name *">
                  <input
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Your Business Name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:bg-white transition"
                  />
                </Field>
                <Field label="Email Address *">
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="business@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:bg-white transition"
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+1 (xxx) xxx-xxxx"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:bg-white transition"
                  />
                </Field>
              </div>
              <Field label="Your Requirements">
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your order volume, product requirements, and any specific needs..."
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:bg-white transition resize-none"
                />
              </Field>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 font-black uppercase tracking-widest text-white hover:bg-amber-500 hover:text-black transition-colors"
                >
                  Submit Inquiry <ArrowRight className="h-4 w-4" />
                </button>
                <div className="text-xs text-slate-400">
                  Or call us: <a href="tel:7146391201" className="font-bold text-slate-700">(714) 639-1201</a>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</label>
      {children}
    </div>
  );
}
