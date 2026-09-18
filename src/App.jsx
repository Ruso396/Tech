import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Technologies from "./pages/Technologies";
import Portfolio from "./pages/Portfolio";
import DigitalMarketing from "./pages/DigitalMarketing";
import Contact from "./pages/Contact";

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3D(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative bg-white dark:bg-black transition-colors min-h-screen flex flex-col overflow-x-clip">
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="flex-1">
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
        </main>

        <Footer />

        {/* Custom Cursor Ring */}
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
          style={{ transition: "transform 0.1s ease-out" }}
        />
        {/* Custom Cursor Dot */}
        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;