import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="RusoBros Tech — Home">
    <img src={logo} alt="RusoBros Tech logo" className="w-9 h-9 object-contain" />
    <span className="text-lg sm:text-xl font-extrabold tracking-tight leading-none dark:text-white">
      RusoBros{" "}
      <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
        Tech
      </span>
    </span>
  </Link>
);

export default Logo;