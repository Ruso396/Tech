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

const logoData = [
  { name: "Microsoft", src: platformLogos.microsoft, color: brandColors.Microsoft },
  { name: "Google", src: platformLogos.google, color: brandColors.Google },
  { name: "React", src: reactLogo, color: brandColors.React },
  { name: "Node.js", src: nodejsLogo, color: brandColors["Node.js"] },
  { name: "Next.js", src: nextjsLogo, color: brandColors["Next.js"], monochrome: true },
  { name: "GitHub", src: githubLogo, color: brandColors.GitHub, monochrome: true },
  { name: "AWS", src: awsLogo, color: brandColors.AWS },
  { name: "Laravel", src: laravelLogo, color: brandColors.Laravel },
  { name: "Flutter", src: flutterLogo, color: brandColors.Flutter },
  { name: "PostgreSQL", src: postgresqlLogo, color: brandColors.PostgreSQL },
  { name: "MongoDB", src: mongodbLogo, color: brandColors.MongoDB },
];

const TechLogoStrip = () => (
  <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-10 sm:py-14 text-center text-gray-700 dark:text-white/80">
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-white/50 mb-8"
    >
      Technologies & Platforms We Work With
    </motion.h3>

    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.05 }}
      viewport={{ once: true }}
      className="flex items-center justify-center flex-wrap gap-6 sm:gap-10 m-4"
    >
      {logoData.map((logo) => (
        <motion.img
          key={logo.name}
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.35 }}
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          decoding="async"
          className={`max-h-5 sm:max-h-6 dark:drop-shadow-xl ${logo.monochrome ? "dark:invert" : ""}`}
        />
      ))}
    </motion.div>
  </section>
);

export default TechLogoStrip;
