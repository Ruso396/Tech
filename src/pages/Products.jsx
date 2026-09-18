import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import usePageMeta from "../hooks/usePageMeta";
import { products } from "../data/content";

/* ---------- Product showcase assets ---------- */
const productImages = {
  billing:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=82",
  ecommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=82",
  clinic:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=82",
  business:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=82",
};

const productCategories = {
  "Billing & Business Management": "Business Management",
  "eCommerce Platform": "eCommerce",
  "Clinic Appointment Management": "Healthcare Software",
  "Custom Business Suite": "Business Software",
};

const productTags = {
  "Billing & Business Management": ["GST Billing", "Invoices", "Inventory", "Reports"],
  "eCommerce Platform": ["Products", "Orders", "Payments"],
  "Clinic Appointment Management": ["Appointments", "Scheduling", "Patients"],
  "Custom Business Suite": ["CRM", "Inventory", "Analytics"],
};

const getProductImage = (product) => productImages[product.id] || productImages.business;

const CategoryLabel = ({ children }) => (
  <p className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
    {children}
  </p>
);

/* ---------- Featured product: large split showcase ---------- */
const FeaturedProduct = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col md:flex-row rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 overflow-hidden"
  >
    {/* Visual */}
    <div className="relative md:w-2/5 h-56 sm:h-64 md:h-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#147AFF]/10 via-white to-[#5044E5]/10 dark:from-[#147AFF]/15 dark:via-gray-900 dark:to-[#5044E5]/15" />
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30" />
      <img
        src={getProductImage(product)}
        alt={`${product.name} product preview`}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-800 dark:text-white shadow-lg">
        <Icon id="zap" className="w-3.5 h-3.5 text-[#5044E5]" />
        GST Billing Ready
      </span>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-800 dark:text-white shadow-lg">
        <Icon id="check" className="w-3.5 h-3.5 text-[#4d8cea]" />
        WhatsApp Invoices
      </span>
    </div>

    {/* Content */}
    <div className="md:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <CategoryLabel>{productCategories[product.name]}</CategoryLabel>
        <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        {product.name}
      </h2>

      <p className="text-sm sm:text-base text-gray-500 dark:text-white/75 leading-relaxed max-w-md">
        {product.tagline}
      </p>

      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {(productTags[product.name] || product.features.slice(0, 4)).map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-white/85">
            <span className="size-5 shrink-0 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white flex items-center justify-center shadow shadow-[#5044E5]/30">
              <Icon id="check" className="w-3 h-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Link
          to={product.ctaLink}
          className="inline-flex items-center gap-2 bg-primary text-white text-sm px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          {product.cta}
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          Request a Demo
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.div>
);

/* ---------- Compact premium product card ---------- */
const ProductShowcaseCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true, amount: 0.15 }}
    className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5044E5]/10 transition-all duration-300"
  >
    {/* Image */}
    <div className="relative h-44 sm:h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#147AFF]/10 via-white to-[#5044E5]/10 dark:from-[#147AFF]/15 dark:via-gray-900 dark:to-[#5044E5]/15" />
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30" />
      <img
        src={getProductImage(product)}
        alt={`${product.name} product preview`}
        loading="lazy"
        decoding="async"
        className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col gap-3 flex-1">
      <CategoryLabel>{productCategories[product.name]}</CategoryLabel>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{product.name}</h3>
      <p className="text-sm text-gray-500 dark:text-white/70">{product.tagline}</p>

      <div className="flex flex-wrap gap-2">
        {(productTags[product.name] || product.features.slice(0, 3)).map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Link
          to={product.ctaLink}
          className="inline-flex items-center gap-2 bg-primary text-white text-sm px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          {product.cta}
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.div>
);

/* ---------- Page ---------- */
const Products = () => {
  usePageMeta(
    "Products | RusoBros Tech — Billing, eCommerce & Clinic Software",
    "RusoBros Tech builds ready-to-use software products — billing & business management, eCommerce platforms, clinic appointment management, and custom business solutions."
  );

  const [featured, ...rest] = products;

  return (
    <div className="overflow-x-clip">
      <PageHeader
        eyebrow="Our Products"
        title={
          <>
            Powerful Products. Built for{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Real Businesses.
            </span>
          </>
        }
        desc="Ready-to-use software solutions designed to simplify operations, improve productivity, and help businesses grow."
      />

      {/* Product introduction */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-2 pb-8 sm:pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white"
        >
          Software designed around{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            real business needs.
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-500 dark:text-white/75 max-w-2xl mx-auto mt-2"
        >
          From out-of-the-box platforms to custom-built suites, each product is engineered to remove
          busywork and help your team focus on growth.
        </motion.p>
      </section>

      {/* Featured product */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto">
          <FeaturedProduct product={featured} />
        </div>
      </section>

      {/* Other products */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {rest.map((product, index) => (
            <ProductShowcaseCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Custom software CTA */}
      <CTASection
        eyebrow="Need something custom?"
        title="We also build business software tailored to your workflows."
        description="If one of our products fits, great. If not, we design software around how your business works."
        buttonLabel="Build Your Solution"
        buttonTo="/contact"
      />
    </div>
  );
};

export default Products;