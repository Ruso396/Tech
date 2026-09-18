import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import usePageMeta from "../hooks/usePageMeta";
import Icon from "../assets/icons";

const products = [
  {
    title: "Smart Billing & GST Management",
    category: "SaaS",
    description:
      "Complete invoicing, GST, purchases, customers, payments, and business reports in one streamlined platform.",
    stack: ["React", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Retail POS & Inventory System",
    category: "Retail",
    description:
      "POS billing, barcode scanning, stock and supplier management, plus real-time sales analytics.",
    stack: ["React", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "eCommerce & Online Store Platform",
    category: "eCommerce",
    description:
      "Product management, categories, cart and checkout, orders, customers, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Clinic & Doctor Appointment System",
    category: "Healthcare",
    description:
      "Doctor schedules, appointments, patients, prescriptions, payments, and full clinic management.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Business CRM & Sales Management",
    category: "CRM",
    description:
      "Leads, customers, follow-ups, sales pipeline, quotations, invoices, and business analytics.",
    stack: ["Next.js", "Laravel", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "School & Education Management System",
    category: "Education",
    description:
      "Students, teachers, attendance, fees, classes, exams, reports, and parent management.",
    stack: ["React", "Laravel", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  },
];

const ProductCard = ({ product, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
    viewport={{ once: true }}
    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5044E5]/15"
  >
    <div className="relative h-52 sm:h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#147AFF]/15 via-transparent to-[#5044E5]/15 opacity-70" />
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5044E5] dark:text-[#4d8cea] shadow backdrop-blur">
        <span className="size-1.5 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
        {product.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col gap-4 p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h3>
      <p className="text-sm text-gray-500 dark:text-white/70">{product.description}</p>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {product.stack.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
        >
          View Project
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.article>
);

const Portfolio = () => {
  usePageMeta(
    "Portfolio | RusoBros Tech — Selected Products",
    "Ready-to-use products by RusoBros Tech: billing and GST platforms, POS and inventory, eCommerce, clinic management, CRM, and education management systems."
  );

  return (
    <div className="overflow-x-clip">
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Products We{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Build & Offer
            </span>
          </>
        }
        desc="Real products. Real business problems. Practical technology."
      />

      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <ProductCard key={p.title} product={p} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Your project could be next."
        title="Let's build something your business can rely on."
        description="Tell us about the problem you're solving and we'll show you how we'd approach it."
        buttonLabel="Start a Project"
        buttonTo="/contact"
      />
    </div>
  );
};

export default Portfolio;