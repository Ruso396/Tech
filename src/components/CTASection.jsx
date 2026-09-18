import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";

const CTASection = ({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonTo = "/contact",
  secondaryLabel,
  secondaryTo,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-28"
  >
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#147AFF] via-[#5044E5] to-[#4d8cea] px-6 py-14 sm:px-12 sm:py-20 text-center shadow-2xl shadow-[#5044E5]/30">
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80 px-3 py-1 rounded-full border border-white/30">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium text-white leading-tight">
          {title}
        </h2>
        {description && <p className="text-sm sm:text-base text-white/85 max-w-xl">{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to={buttonTo}
            className="inline-flex items-center gap-2 bg-white text-[#5044E5] font-semibold text-sm px-8 py-3.5 rounded-full hover:scale-105 hover:shadow-xl transition-all"
          >
            {buttonLabel}
            <Icon id="arrow" className="w-4 h-4" />
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-8 py-3.5 rounded-full border border-white/40 hover:bg-white/10 hover:scale-105 transition-all"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.section>
);

export default CTASection;