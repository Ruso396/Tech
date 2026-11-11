import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    if (window.ruhaGaConfigured !== measurementId) {
      window.ruhaGaConfigured = measurementId;
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { send_page_view: false });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }

    const pagePath = `${location.pathname}${location.search}`;
    if (window.ruhaLastPageView !== pagePath) {
      window.ruhaLastPageView = pagePath;
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pagePath,
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
