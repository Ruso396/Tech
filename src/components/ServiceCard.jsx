import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";

const ServiceCard = ({ service, index = 0, compact = false }) => {
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
      viewport={{ once: true }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={divRef}
      className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5044E5]/10 transition-all duration-300 flex flex-col"
    >
      {/* Service image — the primary visual */}
      <div className="relative w-full aspect-video overflow-hidden shrink-0">
        <img
          src={service.image}
          alt={service.imageAlt || service.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* Subtle bottom gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6 flex flex-col flex-1">
        <div
          className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[260px] h-[260px] absolute transition-opacity duration-500 mix-blend-lighten ${
            visible ? "opacity-50" : "opacity-0"
          }`}
          style={{ top: position.y - 130, left: position.x - 130 }}
        />
        <div className="relative z-10 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{service.title}</h3>
          <p className="text-sm mt-2 text-gray-500 dark:text-white/70">{service.description}</p>

          {!compact && service.benefits && (
            <ul className="mt-4 space-y-1.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <Icon id="check" className="w-4 h-4 text-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link
              to={compact ? "/services" : "/contact"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
            >
              {compact ? "Learn More" : "Start a Project"}
              <Icon id="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;