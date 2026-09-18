import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import { UIMockup } from "./mockups/Mockups";

const ProductCard = ({ product, index = 0, image, compact = false }) => {
  const productImage = image || product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5044E5]/10 transition-all duration-300"
    >
      {productImage ? (
        /* PRODUCT IMAGE */
        <div className={`w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${compact ? "h-36 sm:h-40" : "h-44 sm:h-48"}`}>
          <img
            src={productImage}
            alt={`${product.name} product preview`}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const box = e.currentTarget.closest("div");
              if (box) box.style.display = "none";
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        /* Product visual */
        <div className="relative h-56 sm:h-60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#147AFF]/10 via-white to-[#5044E5]/10 dark:from-[#147AFF]/15 dark:via-gray-900 dark:to-[#5044E5]/15" />
          <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-40" />
          <span className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-[#147AFF]/25 to-[#5044E5]/25 blur-2xl" />
          <span className="absolute -bottom-14 -left-10 w-32 h-32 rounded-full bg-[#4d8cea]/20 blur-2xl" />
          <div className="relative h-full p-4 sm:p-5">
            <UIMockup
              type={product.visual || product.id}
              label={product.name}
              className="h-full w-full group-hover:scale-[1.04] transition-transform duration-500"
            />
          </div>
        </div>
      )}

      <div className={`flex flex-col flex-1 ${compact ? "p-4 sm:p-5 gap-3" : "p-6 gap-4"}`}>
        <div className="flex items-center gap-3">
          <span className={`shrink-0 rounded-xl bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white flex items-center justify-center shadow-lg shadow-[#5044E5]/25 ${compact ? "size-8" : "size-10"}`}>
            <Icon id={product.icon} className={`${compact ? "w-4 h-4" : "w-5 h-5"}`} />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Product</p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{product.name}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-white/70">{product.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, compact ? 3 : 5).map((f) => (
            <span
              key={f}
              className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {f}
            </span>
          ))}
          {product.features.length > (compact ? 3 : 5) && (
            <span className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
              +{product.features.length - (compact ? 3 : 5)} more
            </span>
          )}
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
};

export default ProductCard;