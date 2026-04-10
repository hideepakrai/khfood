"use client";

import * as React from "react";
import { MapPin, Navigation2, Phone, Mail, Search, Clock } from "lucide-react";
import { motion } from "framer-motion";

type Store = {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  hours: string;
  pin: { x: number; y: number };
};

const STORES: Store[] = [
  {
    id: "s1",
    name: "KH Food HQ & Flagship Store",
    type: "Flagship Store",
    address: "585 Yorbita Rd.",
    city: "La Puente",
    state: "CA 91744",
    phone: "(714) 639-1201",
    hours: "Mon–Fri: 9AM – 5PM",
    pin: { x: 15, y: 55 },
  },
  {
    id: "s2",
    name: "KH Food — Orange County",
    type: "Retail Partner",
    address: "1234 Harbor Blvd, Suite 100",
    city: "Anaheim",
    state: "CA 92801",
    hours: "Mon–Sat: 10AM – 7PM",
    pin: { x: 18, y: 60 },
  },
  {
    id: "s3",
    name: "KH Food — San Gabriel Valley",
    type: "Retail Partner",
    address: "818 Valley Blvd",
    city: "Rosemead",
    state: "CA 91770",
    hours: "Daily: 9AM – 8PM",
    pin: { x: 20, y: 52 },
  },
  {
    id: "s4",
    name: "KH Food — Los Angeles Chinatown",
    type: "Authorized Distributor",
    address: "750 N Hill St",
    city: "Los Angeles",
    state: "CA 90012",
    hours: "Daily: 10AM – 6PM",
    pin: { x: 22, y: 50 },
  },
  {
    id: "s5",
    name: "KH Food — Monterey Park",
    type: "Retail Partner",
    address: "501 W Garvey Ave",
    city: "Monterey Park",
    state: "CA 91754",
    hours: "Mon–Sun: 9AM – 9PM",
    pin: { x: 21, y: 53 },
  },
  {
    id: "s6",
    name: "KH Food — San Fernando Valley",
    type: "Authorized Distributor",
    address: "6200 Van Nuys Blvd",
    city: "Van Nuys",
    state: "CA 91401",
    hours: "Mon–Sat: 9AM – 6PM",
    pin: { x: 18, y: 46 },
  },
];

const typeColors: Record<string, string> = {
  "Flagship Store": "bg-amber-500 text-black",
  "Retail Partner": "bg-slate-800 text-white",
  "Authorized Distributor": "bg-amber-100 text-amber-900",
};

export default function StoreLocatorPage() {
  const [activeId, setActiveId] = React.useState<string>("s1");
  const [searchText, setSearchText] = React.useState("");

  const activeStore = React.useMemo(
    () => STORES.find((s) => s.id === activeId) || STORES[0],
    [activeId]
  );

  const filteredStores = React.useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return STORES;
    return STORES.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.state.toLowerCase().includes(q)
    );
  }, [searchText]);

  const openDirections = (store: Store) => {
    const full = `${store.name}, ${store.address}, ${store.city}, ${store.state}`;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(full)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
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
        <div className="mx-auto flex min-h-[280px] max-w-7xl items-center justify-center px-6 py-16 text-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-amber-700"
            >
              Find Us Near You
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-6xl"
            >
              Store Locator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-slate-600"
            >
              Find KH Food products at a retailer near you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── SEARCH + CONTENT ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* Search bar */}
        <div className="mb-8 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-md border border-slate-100">
          <Search className="ml-2 h-5 w-5 text-slate-400 shrink-0" />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by city, state, or store name..."
            className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          {searchText && (
            <button
              onClick={() => setSearchText("")}
              className="mr-1 text-xs font-semibold text-slate-400 hover:text-slate-700"
            >
              Clear
            </button>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* ── STORE LIST ─── */}
          <div className="lg:col-span-5 space-y-3 max-h-[620px] overflow-y-auto pr-1">
            {filteredStores.length === 0 && (
              <div className="py-16 text-center text-slate-400 text-sm">
                No stores found. Try a different search term.
              </div>
            )}
            {filteredStores.map((store) => (
              <button
                key={store.id}
                onClick={() => setActiveId(store.id)}
                className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 ${
                  store.id === activeId
                    ? "bg-white border-amber-400 shadow-lg shadow-amber-100"
                    : "bg-white border-slate-100 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span
                      className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest ${
                        typeColors[store.type] ?? "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {store.type}
                    </span>
                    <p className="font-bold text-slate-900 truncate">{store.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {store.address}, {store.city}, {store.state}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      {store.hours}
                    </div>
                  </div>
                  <div
                    className={`mt-1 h-3 w-3 rounded-full shrink-0 ${
                      store.id === activeId ? "bg-amber-500" : "bg-slate-200"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* ── MAP + DETAIL CARD ─── */}
          <div className="lg:col-span-7">
            {/* Map */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 shadow-inner">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />

              {/* California outline placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <MapPin className="mx-auto mb-2 h-10 w-10 text-amber-400" />
                  <p className="text-sm font-semibold">California, USA</p>
                  <p className="text-xs">Click a store to get directions</p>
                </div>
              </div>

              {/* Store pins */}
              {filteredStores.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${s.pin.x}%`, top: `${s.pin.y}%` }}
                  title={s.name}
                >
                  <div
                    className={`h-9 w-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                      s.id === activeId
                        ? "bg-amber-500 scale-125 ring-4 ring-amber-200"
                        : "bg-slate-800 hover:bg-amber-500 hover:scale-110"
                    }`}
                  >
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </button>
              ))}
            </div>

            {/* Active store detail card */}
            <motion.div
              key={activeStore.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-3xl bg-white border border-slate-100 shadow-md p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`mb-2 inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${
                      typeColors[activeStore.type] ?? "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {activeStore.type}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    {activeStore.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {activeStore.address}, {activeStore.city}, {activeStore.state}
                  </p>
                </div>
                <button
                  onClick={() => openDirections(activeStore)}
                  className="shrink-0 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:bg-amber-500 hover:text-black transition-colors"
                >
                  <Navigation2 className="h-4 w-4" />
                  Directions
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {activeStore.phone && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                    {activeStore.phone}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                  {activeStore.hours}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                  contact@khfood.com
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ─────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-amber-400">
            Can't Find a Store?
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            We Ship Directly To You
          </h2>
          <p className="mt-4 text-slate-400">
            Order online and receive fresh KH Food products at your doorstep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/en/products/domestic"
              className="rounded-full bg-amber-500 px-8 py-3 font-black uppercase tracking-widest text-black hover:bg-amber-400 transition-colors"
            >
              Shop Online
            </a>
            <a
              href="/en/contact-us"
              className="rounded-full border border-white/20 px-8 py-3 font-black uppercase tracking-widest text-white hover:border-white/60 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
