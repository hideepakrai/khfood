import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { type ReactNode } from "react";

import "../globals.css";

import { type Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { Providers } from "@/providers";
import { getSiteSettingsCss } from "@/data/storefront/globals";
import { getServerSideURL } from "@/utilities/getURL";
import { mergeOpenGraph } from "@/utilities/mergeOpenGraph";
import { cn } from "src/utilities/cn";

import type { Metadata } from "next";
import { Footer } from "@/frontendComponents/sections/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  await draftMode();
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  let data = "";
  try {
    data = await getSiteSettingsCss("en", 1);
  } catch (e) {
    // Silently fail if CSS settings not available
  }

  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "twp overflow-x-clip"
      )}
      lang={locale}
    >
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {data && <style>{data}</style>}
      </head>
      <body className="max-w-screen overflow-x-clip">
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | KH Foods",
    default: "KH Foods | Highest Quality Roasted Peanuts",
  },
  description:
    "Experience the world's finest roasted peanuts and snacks from KH Foods. Quality since 1990.",
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: !(process.env.NEXT_PUBLIC_ROBOTS_INDEX === "false"),
    follow: !(process.env.NEXT_PUBLIC_ROBOTS_INDEX === "false"),
  },
};
