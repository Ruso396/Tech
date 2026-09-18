import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, desc, align = "center", className = "" }) => {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignClass} gap-3 ${className}`}>
      {eyebrow && (
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea] bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 rounded-full">
          {eyebrow}
        </span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-500 dark:text-white/75 max-w-lg"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;