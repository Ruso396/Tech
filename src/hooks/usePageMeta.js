import { useEffect } from "react";

const SITE_ORIGIN = "https://ruhatech.vercel.app";

const setMetaContent = (key, attribute, value) => {
  const selector = `meta[${attribute}="${key}"]`;
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", value);
};

const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      setMetaContent("description", "name", description);
      setMetaContent("og:description", "property", description);
      setMetaContent("twitter:description", "name", description);
    }

    setMetaContent("og:title", "property", title);
    setMetaContent("twitter:title", "name", title);

    const canonicalUrl = new URL(window.location.pathname, SITE_ORIGIN).href;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
    setMetaContent("og:url", "property", canonicalUrl);
  }, [title, description]);
};

export default usePageMeta;