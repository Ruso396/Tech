import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, CTAs } from "../data/content";
import Icon from "../assets/icons";

const MobileMenu = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 xl:hidden"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="text-lg font-extrabold dark:text-white">
                RusoBros{" "}
                <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
                  Tech
                </span>
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white"
              >
                <Icon id="close" className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-6 pt-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-white font-medium hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                    <Icon id="arrow" className="w-4 h-4 opacity-40" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-10 pt-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm px-6 py-3.5 rounded-full hover:scale-102 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                {CTAs.startProject}
                <Icon id="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;