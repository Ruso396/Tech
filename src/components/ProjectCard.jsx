import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import { UIMockup } from "./mockups/Mockups";

const ProjectCard = ({ project, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
    viewport={{ once: true }}
    className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5044E5]/10 transition-all duration-300"
  >
    {/* Product preview */}
    <div className="relative h-56 sm:h-60 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#147AFF]/10 via-white to-[#5044E5]/10 dark:from-[#147AFF]/15 dark:via-gray-900 dark:to-[#5044E5]/15" />
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-40" />
      <span className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-[#147AFF]/25 to-[#5044E5]/25 blur-2xl" />
      <span className="absolute -bottom-14 -left-10 w-32 h-32 rounded-full bg-[#4d8cea]/20 blur-2xl" />
      <div className="relative h-full p-4 sm:p-5">
        <UIMockup
          type={project.visual || "billing"}
          className="h-full w-full group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-700 dark:text-gray-200 shadow-sm">
        {project.category}
      </span>
    </div>

    <div className="p-6 flex flex-col gap-4 flex-1">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-white/70">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
        >
          View Project
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;