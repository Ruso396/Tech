import React from "react";
import { motion } from "framer-motion";
import Icon from "../assets/icons";

const TechnologyCard = ({ name, detail, icon = "cpu", index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
    viewport={{ once: true, amount: 0.2 }}
    className="group relative flex items-start gap-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5044E5]/35 hover:shadow-lg hover:shadow-[#5044E5]/10 dark:hover:shadow-white/5"
  >
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#147AFF]/15 to-[#5044E5]/15 text-primary transition-transform duration-300 group-hover:scale-105">
      <Icon id={icon} className="w-5 h-5" />
    </span>
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between gap-2">
        <h4 className="truncate text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h4>
        <Icon
          id="arrow"
          className="w-3.5 h-3.5 shrink-0 text-[#5044E5] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </div>
      <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-white/65">
        {detail}
      </p>
    </div>
  </motion.div>
);

export default TechnologyCard;
