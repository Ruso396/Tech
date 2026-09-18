import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import ProductCard from "../components/ProductCard";
import CTASection from "../components/CTASection";
import { UIMockup } from "../components/mockups/Mockups";
import usePageMeta from "../hooks/usePageMeta";
import { products } from "../data/content";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  usePageMeta(
    product
      ? `${product.name} | RusoBros Tech`
      : "Product | RusoBros Tech",
    product
      ? `${product.tagline} ${product.description}`
      : "Explore RusoBros Tech products."
  );

  if (!product) {
    return (
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-32 text-center">
        <p className="text-sm text-gray-500 dark:text-white/70 mb-4">Product not found.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <Icon id="arrow" className="w-4 h-4 rotate-180" />
          Back to Products
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id);

  return (
    <div className="overflow-x-clip">
      {/* Breadcrumb */}
      <div className="pt-10 sm:pt-14 px-4 sm:px-12 lg:px-24 xl:px-40">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-white/60 hover:text-primary transition-colors"
        >
          <Icon id="arrow" className="w-3.5 h-3.5 rotate-180" />
          All Products
        </Link>
      </div>

      {/* Header */}
      <section className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 py-10 sm:py-14">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[22rem] rounded-full bg-[#5044E5]/15 blur-3xl" />
        <div className="absolute -right-20 top-24 w-72 h-72 rounded-full bg-[#4d8cea]/15 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea] bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 rounded-full">
              <Icon id={product.icon} className="w-4 h-4" />
              Product
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-medium tracking-tight text-gray-900 dark:text-white leading-tight">
              {product.headline}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-white/75 max-w-lg leading-relaxed">
              {product.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm px-7 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Request a Demo
                <Icon id="arrow" className="w-4 h-4" />
              </Link>
              <a
                href="#use-cases"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Who It's For
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-14 -right-14 w-56 h-56 rounded-full bg-gradient-to-br from-[#147AFF]/25 to-[#5044E5]/25 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 w-52 h-52 rounded-full bg-[#4d8cea]/20 blur-3xl" />
            <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-br from-[#147AFF]/15 via-white/40 to-[#5044E5]/15 dark:from-[#147AFF]/20 dark:via-gray-900 dark:to-[#5044E5]/20 shadow-2xl shadow-[#5044E5]/15">
              <UIMockup type={product.visual || product.id} label={product.name} className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & benefits */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white">
              What's included
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {product.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
                >
                  <span className="mt-0.5 size-5 shrink-0 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <Icon id="check" className="w-3 h-3 text-primary" />
                  </span>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{f}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="use-cases"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Icon id="target" className="w-5 h-5 text-primary" />
                Why teams choose it
              </h3>
              <ul className="mt-4 space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <Icon id="check" className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#147AFF]/10 via-white/40 to-[#5044E5]/10 dark:from-[#147AFF]/15 dark:via-gray-900 dark:to-[#5044E5]/15 border border-gray-200 dark:border-gray-700 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30 pointer-events-none" />
              <div className="relative">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Icon id="users" className="w-5 h-5 text-primary" />
                  Who it's for
                </h3>
                <ul className="mt-4 space-y-3">
                  {product.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#147AFF] to-[#5044E5]" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related products */}
      <section className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white text-center">
            Explore other products
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
            {related.map((p, i) => (
              <ProductCard key={p.name} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Interested in this product?"
        title="Let's see if it fits the way your business works."
        description="Request a demo or talk to our team about setup, customization, and support."
        buttonLabel="Request a Demo"
        buttonTo="/contact"
        secondaryLabel="View All Products"
        secondaryTo="/products"
      />
    </div>
  );
};

export default ProductDetail;