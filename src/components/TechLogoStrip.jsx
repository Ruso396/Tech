import React from "react";
import { motion } from "framer-motion";
import { platformLogos } from "../assets/images";
import reactLogo from "../assets/logos/react.svg";
import nodejsLogo from "../assets/logos/nodejs.svg";
import nextjsLogo from "../assets/logos/nextjs.svg";
import githubLogo from "../assets/logos/github.svg";
import awsLogo from "../assets/logos/aws.svg";
import laravelLogo from "../assets/logos/laravel.svg";
import flutterLogo from "../assets/logos/flutter.svg";
import postgresqlLogo from "../assets/logos/postgresql.svg";
import mongodbLogo from "../assets/logos/mongodb.svg";

/* Official brand colors per technology/platform. Monochrome brands (GitHub,
   Next.js) intentionally keep theme-aware black/white labels, and their marks
   are inverted in dark mode so the official logos stay visible. */
const brandColors = {
  Microsoft: "#F25022",
  Google: "#4285F4",
  React: "#61DAFB",
  "Node.js": "#339933",
  "Next.js": null,
  GitHub: null,
  AWS: "#FF9900",
  Laravel: "#FF2D20",
  Flutter: "#02569B",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
};

const logos = [
  { name: "", src: platformLogos.microsoft },
  { name: "", src: platformLogos.google },
  { name: "React", src: reactLogo },
  { name: "", src: nodejsLogo },
  { name: "Next.js", src: nextjsLogo, monochrome: true },
  { name: "GitHub", src: githubLogo, monochrome: true },
  { name: "AWS", src: awsLogo },
  { name: "Laravel", src: laravelLogo },
  { name: "Flutter", src: flutterLogo },
  { name: "PostgreSQL", src: postgresqlLogo },
  { name: "", src: mongodbLogo },
].map((logo) => ({ color: brandColors[logo.name], ...logo }));

const LogoItem = ({ logo }) => (
  <div className="group flex items-center gap-2.5 px-6 py-3 shrink-0 transition-all duration-300">
    <img
      src={logo.src}
      alt={logo.name}
      loading="eager"
      decoding="async"
      draggable={false}
      className={`block h-6 w-auto shrink-0 object-contain ${logo.monochrome ? "dark:invert" : ""}`}
    />
    <span
      className={`text-base font-bold tracking-tight transition-colors ${logo.color ? "" : "text-gray-900 dark:text-white"}`}
      style={logo.color ? { color: logo.color } : undefined}
    >
      {logo.name}
    </span>
  </div>
);

const TechLogoStrip = () => {
  const row = [...logos, ...logos];
  return (
    <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-10 sm:py-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/50 mb-6"
      >
        Technologies & Platforms We Work With
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="marquee-wrap mask-fade-x overflow-hidden"
      >
        <div className="animate-marquee flex items-center">
          {row.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechLogoStrip;