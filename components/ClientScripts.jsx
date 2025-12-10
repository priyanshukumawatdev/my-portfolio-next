"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Helper to load scripts
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    async function loadAllScripts() {
      await loadScript("/assets/js/jquery.min.js");

      await loadScript("/assets/js/infiniteslidev2.js");
      await loadScript("/assets/js/jquery.infiniteslide.min.js");

      await loadScript("/assets/js/bootstrap.min.js");
      await loadScript("/assets/js/swiper-bundle.min.js");
      await loadScript("/assets/js/odometer.min.js");
      await loadScript("/assets/js/slick.min.js");

      // Load main.js LAST
      await loadScript("/assets/js/main.js");
    }

    loadAllScripts();
  }, []);

  return null;
}
