import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Technologies = lazy(() => import("./pages/Technologies"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const Contact = lazy(() => import("./pages/Contact"));

const getInitialTheme = () => "light";

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalytics />
      <div className="relative bg-white dark:bg-black transition-colors min-h-screen flex flex-col overflow-x-clip">
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="flex-1">
          <Suspense fallback={<div className="min-h-[65vh]" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;