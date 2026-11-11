import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center shrink-0" aria-label="RUHA Tech — Home">
    <img
      src={logo}
      alt="RUHA Tech logo"
      width={2172}
      height={724}
      loading="eager"
      decoding="async"
      fetchPriority="low"
      className="h-12 w-52 sm:h-14 sm:w-60 object-contain object-left"
    />
  </Link>
);

export default Logo;