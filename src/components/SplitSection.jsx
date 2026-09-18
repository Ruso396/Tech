import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import { UIMockup } from "./mockups/Mockups";

const SplitSection = ({
  reverse = false,
  eyebrow,
  title,
  desc,
  bullets = [],
  visual = "billing",
  label,
  chips = [],
  ctaLabel = "Start a Project",
  ctaTo = "/contact",
  gap = "gap-12 lg:gap-16",
  visualMaxWidth,
  children,
}) => (
  <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-24 relative">
    <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 items-center ${gap}`}>
      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={reverse ? "lg:order-2" : "lg:order-1"}
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea] bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 rounded-full">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="mt-4 text-2xl sm:text-3xl xl:text-4xl font-medium tracking-tight text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>
        )}
        {desc && <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-white/75 leading-relaxed">{desc}</p>}

        {bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="mt-0.5 size-5 shrink-0 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <Icon id="check" className="w-3 h-3 text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {children}

        {ctaLabel && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 bg-primary text-white text-sm px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              {ctaLabel}
              <Icon id="arrow" className="w-4 h-4" />
            </Link>
          </div>
        )}
      </motion.div>

      {/* Visual column */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={reverse ? "lg:order-1" : "lg:order-2"}
      >
        <div className={`relative w-full ${visualMaxWidth ? `${visualMaxWidth} mx-auto` : ""}`}>
          <div className="absolute -top-14 -right-14 w-56 h-56 rounded-full bg-gradient-to-br from-[#147AFF]/25 to-[#5044E5]/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-52 h-52 rounded-full bg-[#4d8cea]/20 blur-3xl" />
          <div className="relative rounded-3xl border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-[#147AFF]/10 via-white to-[#5044E5]/10 dark:from-[#147AFF]/15 dark:via-gray-900 dark:to-[#5044E5]/15 p-4 sm:p-6">
            <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30 rounded-3xl pointer-events-none" />
            <UIMockup type={visual} label={label} className="relative" />
          </div>
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className={`absolute hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-xl text-xs font-semibold text-gray-700 dark:text-gray-200 ${
                chip.className || ""
              }`}
            >
              {chip.icon && <Icon id={chip.icon} className="w-4 h-4 text-primary" />}
              {chip.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SplitSection;