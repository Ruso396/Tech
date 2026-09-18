import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ThemeToggleBtn from "./ThemeToggleBtn";
import MobileMenu from "./MobileMenu";
import Icon from "../assets/icons";
import { navLinks, CTAs } from "../data/content";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `
      relative
      whitespace-nowrap
      text-sm
      xl:text-[15px]
      font-medium
      py-2
      transition-colors
      duration-200
      hover:text-primary
      dark:hover:text-primary
      ${
        isActive
          ? "text-primary dark:text-primary after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-primary"
          : "text-gray-700 dark:text-white"
      }
    `;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          sticky
          top-0
          z-30
          w-full
          backdrop-blur-xl
          bg-white/50
          dark:bg-gray-900/70
          border-b
          border-gray-100
          dark:border-gray-800
        "
      >
        <div
          className="
            w-full
            max-w-[1600px]
            mx-auto
            flex
            items-center
            min-h-[76px]
            px-4
            sm:px-8
            xl:px-14
            2xl:px-20
            gap-4
            xl:gap-8
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
            className="
              hidden
              xl:flex
              flex-1
              items-center
              justify-center
              gap-4
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
          <div
            className="
              flex
              items-center
              justify-end
              gap-3
              xl:gap-4
              shrink-0
            "
          >
            {/* Theme Toggle */}
            <ThemeToggleBtn
              theme={theme}
              setTheme={setTheme}
            />

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="
                hidden
                xl:flex
                items-center
                justify-center
                gap-2
                bg-primary
                text-white
                text-sm
                xl:text-[15px]
                font-medium
                px-6
                xl:px-7
                py-3
                rounded-full
                hover:scale-[1.03]
                transition-transform
                duration-200
                shadow-lg
                shadow-primary/25
                whitespace-nowrap
              "
            >
              {CTAs.primary}
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              type="button"
              className="
                xl:hidden
                size-9
                flex
                items-center
                justify-center
                rounded-full
                border
                border-gray-400
                dark:border-gray-600
                text-gray-700
                dark:text-white
                transition-colors
                hover:border-primary
                hover:text-primary
              "
            >
              <Icon id="menu" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;