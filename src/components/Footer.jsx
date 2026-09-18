import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Icon from "../assets/icons";
import { footerColumns, socialLinks, BRAND } from "../data/content";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 pt-16 mt-20 sm:mt-32 px-4 sm:px-10 lg:px-24 xl:px-40 border-t border-gray-100 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
      >
        {/* Brand */}
        <div className="lg:col-span-2 space-y-5">
          <Logo />
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
            Building modern digital products, software solutions, and technology
            experiences for businesses ready to grow.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="RusoBros Tech on LinkedIn"
              className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <Icon id="linkedin" className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="RusoBros Tech on GitHub"
              className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <Icon id="github" className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="RusoBros Tech on X (Twitter)"
              className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <Icon id="twitter" className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              aria-label="Email RusoBros Tech"
              className="size-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <Icon id="mail" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link Columns */}
        {footerColumns.map((col, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{col.heading}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <hr className="border-gray-200 dark:border-gray-700" />

      <div className="py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-sm text-gray-500 dark:text-gray-500">
        <p>© 2026 RusoBros Tech. All rights reserved.</p>
        <p>Design • Development • Technology • Growth</p>
      </div>
    </footer>
  );
};

export default Footer;