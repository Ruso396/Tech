import React, { useEffect, useState } from "react";
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
      </div>
    </BrowserRouter>
  );
};

export default App;