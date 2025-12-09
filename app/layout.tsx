
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Footer from '../components/Footer'; 

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Your template meta */}
        <meta name="author" content="themesflat.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSS from public/assets */}
        <link rel="stylesheet" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick.theme.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/logo/favicon.svg" />
        <link rel="apple-touch-icon-precomposed" href="/assets/images/logo/favicon.svg" />
      </head>

       <body className={`${geistSans.variable} ${geistMono.variable} antialiased counter-scroll`}>
        {children}

        <Footer/>
        {/* JS Scripts */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />

{/* ADD THIS → the missing plugin */}
  <Script src="/assets/js/jquery.infiniteslide.min.js" strategy="afterInteractive" />

{/* Finally main.js */}
  <Script src="/assets/js/main.js" strategy="afterInteractive" />

    </body>
    </html>
  );
}

