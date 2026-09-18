import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";

const ServiceCard = ({ service, index = 0, compact = false }) => {
  const [visible, setVisible] = useState(false);
  const divRef = React.useRef(null);
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
      className="m-2 sm:m-4 relative overflow-hidden max-w-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-100 dark:shadow-white/10"
    >
      {/* Mouse-follow glow */}
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div className="relative z-10 flex items-center gap-7 p-8 pb-4">
        {/* Icon */}
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shrink-0">
          <Icon id={service.icon} className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{service.title}</h3>
          <p className="text-sm text-gray-500 dark:text-white/80 pt-2 pb-3">{service.description}</p>
        </div>
      </div>

      {/* Benefits (full view only) */}
      {!compact && service.benefits && (
        <div className="relative z-10 px-8 pt-0 pb-3">
          <ul className="space-y-1.5">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <Icon id="check" className="w-4 h-4 text-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="relative z-10 px-8 pb-6 pt-4">
        <Link
          to={compact ? "/services" : "/contact"}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          {compact ? "Learn More" : "Start a Project"}
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
