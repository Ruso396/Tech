import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, desc }) => (
  <section className="relative overflow-hidden text-center pt-16 sm:pt-24 pb-10 px-4 sm:px-12 lg:px-24 xl:px-40">
    <div className="absolute inset-0 bg-grid" />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[46rem] h-[26rem] rounded-full bg-[#5044E5]/15 blur-3xl" />
    <div className="absolute -top-16 right-[10%] w-64 h-64 rounded-full bg-[#4d8cea]/20 blur-3xl" />
    <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-[#147AFF]/15 blur-3xl" />
    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[36rem] h-64 rounded-full bg-[#38bdf8]/10 blur-3xl" />

    <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl mx-auto">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea] bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 rounded-full"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 dark:text-white leading-tight"
      >
        {title}
      </motion.h1>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 dark:text-white/75 max-w-lg"
        >
          {desc}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHeader;