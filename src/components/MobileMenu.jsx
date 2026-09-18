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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 bottom-0 h-full w-60 pl-10 pt-20 bg-primary text-white flex flex-col gap-5 shadow-2xl overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-4 top-4 p-1 text-white cursor-pointer"
            >
              <Icon id="close" className="w-5 h-5" />
            </button>

            <nav className="flex-1 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className="text-white font-medium hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pb-10 pt-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#5044E5] text-sm px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all font-semibold"
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