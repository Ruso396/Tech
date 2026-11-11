import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Icon from "../assets/icons";
import { navLinks, CTAs } from "../data/content";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `
      relative
      whitespace-nowrap
      text-sm
      font-medium
      py-2
      border-b-2
      border-transparent
      transition-colors
      duration-200
      lg:hover:border-primary
      ${
        isActive
          ? "text-primary dark:text-primary lg:border-primary"
          : "text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary"
      }
    `;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full
          grid
          grid-cols-[1fr_auto]
          items-center
          lg:grid-cols-[240px_minmax(0,1fr)_auto]
          px-4
          sm:px-12
          lg:px-6
          xl:px-16
          2xl:px-40
          py-4
          sticky
          top-0
          z-30
          backdrop-blur-xl
          font-medium
          bg-white/50
          dark:bg-gray-900/70
          border-b
          border-gray-200/60
          dark:border-gray-800/60
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav
          aria-label="Primary navigation"
          className="
            hidden
            lg:flex
            items-center
            justify-center
            justify-self-center
            gap-3
            xl:gap-6
            2xl:gap-8
            min-w-0
          "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* =====================================================
            RIGHT CONTROLS
        ===================================================== */}
        <div className="flex items-center justify-end shrink-0">
          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="
              hidden
              xl:flex
              items-center
              gap-2
              bg-[#C8102E]
              text-white
              text-sm
              px-6
              py-2
              rounded-full
              hover:scale-105
              transition-transform
              hover:bg-[#A20D26]
              whitespace-nowrap
            "
          >
            {CTAs.primary}
            <Icon id="arrow" className="w-4 h-4" />
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            type="button"
            className="
              lg:hidden
              p-1
              text-gray-700
              dark:text-white
              transition-colors
              hover:text-primary
              hover:dark:text-primary
              cursor-pointer
            "
          >
            <Icon id="menu" className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;