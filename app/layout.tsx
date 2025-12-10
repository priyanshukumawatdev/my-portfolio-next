import ClientScripts from "../components/ClientScripts";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davies - Personal Portfolio HTML Template",
  description:
    "Davies - Personal Portfolio is a sleek and modern HTML template designed for developers, designers, freelancers, and professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="themesflat.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSS */}
        <link rel="stylesheet" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick.theme.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />

        <link
          rel="shortcut icon"
          href="/assets/images/logo/favicon.svg"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/assets/images/logo/favicon.svg"
        />


               {/* Load jQuery BEFORE your main.js */}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* Load infiniteslide plugin if required */}
        <Script src="/js/infiniteslidev2.js" strategy="beforeInteractive" />

        {/* Load your main.js AFTER jQuery */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </head>

      <body
      suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased counter-scroll`}
      >
        {children}


          {/* Load Bootstrap JS */}
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="afterInteractive"
        />

        {/* Load all other theme JS */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />


        {/* Footer */}
        <Footer />

        {/* Load ALL JS here (jQuery + Plugins + main.js) */}
        <ClientScripts />
      </body>
    </html>
  );
}
