import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import TechLogoStrip from "../components/TechLogoStrip";
import TechnologyCard from "../components/TechnologyCard";
import CTASection from "../components/CTASection";
import usePageMeta from "../hooks/usePageMeta";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiReact as SiReactNative,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithub,
} from "react-icons/si";

const container = "px-4 sm:px-12 lg:px-24 xl:px-40";

const groupDetails = {
  Frontend: {
    description: "Interfaces that feel fast, clear, and effortless to use.",
    color: "#147AFF",
  },
  Mobile: {
    description: "Native-quality experiences for iOS and Android from one team.",
    color: "#7C3AED",
  },
  Backend: {
    description: "Reliable services, clean architecture, and room to grow.",
    color: "#0F766E",
  },
  Databases: {
    description: "The right data model for speed, structure, and flexibility.",
    color: "#0284C7",
  },
  "APIs & Integrations": {
    description: "Connected systems that keep your workflows moving.",
    color: "#D97706",
  },
  Deployment: {
    description: "Smooth releases, dependable hosting, and healthy products.",
    color: "#16A34A",
  },
};

const stats = [
  { value: "6", label: "Technology layers" },
  { value: "25+", label: "Tools & practices" },
  { value: "2", label: "Mobile platforms" },
  { value: "1", label: "Connected workflow" },
];

const architectureLayers = [
  {
    icon: "web",
    title: "Experience",
    meta: "React · Next.js · Mobile",
    color: "#147AFF",
  },
  {
    icon: "server",
    title: "Application",
    meta: "Node.js · Laravel · APIs",
    color: "#7C3AED",
  },
  {
    icon: "database",
    title: "Data",
    meta: "MySQL · PostgreSQL · MongoDB",
    color: "#0284C7",
  },
  {
    icon: "cloud",
    title: "Infrastructure",
    meta: "Cloud · CI/CD · Monitoring",
    color: "#16A34A",
  },
];

const principles = [
  {
    icon: "zap",
    title: "Performance-first",
    description: "Fast loading, responsive interfaces and efficient systems that respect every user's time.",
  },
  {
    icon: "shield",
    title: "Secure by design",
    description: "Authentication, validation, and reliable patterns built into the foundation.",
  },
  {
    icon: "layers",
    title: "Easy to maintain",
    description: "Clear structure and reusable components that keep future updates predictable.",
  },
  {
    icon: "cloud",
    title: "Ready to scale",
    description: "Architecture and deployment choices that grow alongside your business.",
  },
];

// Official tech logo mapping
const techLogos = {
  react: <SiReact className="w-5 h-5" />,
  nextjs: <SiNextdotjs className="w-5 h-5" />,
  javascript: <SiJavascript className="w-5 h-5" />,
  typescript: <SiTypescript className="w-5 h-5" />,
  tailwind: <SiTailwindcss className="w-5 h-5" />,
  html: <SiHtml5 className="w-5 h-5" />,
  css: <SiCss className="w-5 h-5" />,
  reactnative: <SiReact className="w-5 h-5" />,
  flutter: <SiFlutter className="w-5 h-5" />,
  node: <SiNodedotjs className="w-5 h-5" />,
  express: <SiExpress className="w-5 h-5" />,
  laravel: <SiLaravel className="w-5 h-5" />,
  php: <SiPhp className="w-5 h-5" />,
  mysql: <SiMysql className="w-5 h-5" />,
  postgresql: <SiPostgresql className="w-5 h-5" />,
  mongodb: <SiMongodb className="w-5 h-5" />,
  firebase: <SiFirebase className="w-5 h-5" />,
  docker: <SiDocker className="w-5 h-5" />,
  aws: <Icon id="cloud" className="w-5 h-5" />,
  vercel: <SiVercel className="w-5 h-5" />,
  git: <SiGit className="w-5 h-5" />,
  github: <SiGithub className="w-5 h-5" />,
};

// Official tech brand colors
const techColors = {
  react: "#61DAFB",
  nextjs: "#000000",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  tailwind: "#06B6D4",
  html: "#E34F26",
  css: "#1572B6",
  reactnative: "#61DAFB",
  flutter: "#02569B",
  node: "#339933",
  express: "#000000",
  laravel: "#FF2D20",
  php: "#777BB4",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  firebase: "#FFCA28",
  docker: "#2496ED",
  aws: "#FF9900",
  vercel: "#000000",
  git: "#F05032",
  github: "#181717",
};

// Architecture layer official logos
const layerLogos = {
  web: (
    <div className="flex items-center gap-1">
      <SiReact className="w-4 h-4" style={{ color: "#61DAFB" }} />
      <SiNextdotjs className="w-4 h-4" style={{ color: "#000000" }} />
    </div>
  ),
  server: (
    <div className="flex items-center gap-1">
      <SiNodedotjs className="w-4 h-4" style={{ color: "#339933" }} />
      <SiLaravel className="w-4 h-4" style={{ color: "#FF2D20" }} />
    </div>
  ),
  database: (
    <div className="flex items-center gap-1">
      <SiMysql className="w-4 h-4" style={{ color: "#4479A1" }} />
      <SiPostgresql className="w-4 h-4" style={{ color: "#4169E1" }} />
    </div>
  ),
  cloud: (
    <div className="flex items-center gap-1">
      <SiDocker className="w-4 h-4" style={{ color: "#2496ED" }} />
      <Icon id="cloud" className="w-4 h-4" style={{ color: "#FF9900" }} />
    </div>
  ),
};

// Group tech logos for each category
const groupTechLogos = {
  Frontend: ["react", "nextjs", "javascript", "typescript", "tailwind", "html", "css"],
  Mobile: ["reactnative", "flutter"],
  Backend: ["node", "express", "laravel", "php"],
  Databases: ["mysql", "postgresql", "mongodb", "firebase"],
  "APIs & Integrations": ["node", "express", "firebase", "docker"],
  Deployment: ["docker", "aws", "vercel", "git", "github"],
};

const ArchitectureVisual = () => (
  <motion.div
    initial={{ opacity: 0, y: 36, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.25 }}
    className="relative"
    aria-label="Technology architecture overview"
  >
    <div className="absolute -top-14 -right-10 h-64 w-64 rounded-full bg-[#147AFF]/20 blur-3xl" />
    <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-[#5044E5]/20 blur-3xl" />

    <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-4 shadow-2xl shadow-[#5044E5]/10 backdrop-blur sm:p-6">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
          Product architecture
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {architectureLayers.map((layer) => (
          <div
            key={layer.title}
            className="flex items-center gap-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60 px-3.5 py-3 transition-colors hover:border-[#5044E5]/25 hover:bg-white dark:hover:bg-gray-800"
          >
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-lg"
              style={{ color: layer.color, backgroundColor: `${layer.color}14` }}
            >
              {layerLogos[layer.icon]}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-900 dark:text-white">{layer.title}</p>
              <p className="mt-0.5 truncate text-[10px] text-gray-500 dark:text-white/60">
                {layer.meta}
              </p>
            </div>
            <Icon
              id="arrow"
              className="ml-auto w-3.5 h-3.5 shrink-0 text-[#5044E5]"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["react", "node", "postgresql", "docker"].map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2.5 py-1.5 text-[10px] font-semibold text-gray-600 dark:text-gray-300"
          >
            <span
              className="size-4 flex items-center justify-center"
              style={{ color: techColors[tech] || "#5044E5" }}
            >
              {techLogos[tech]}
            </span>
            {tech === "react" ? "React" : tech === "node" ? "Node.js" : tech === "postgresql" ? "PostgreSQL" : "Docker"}
          </span>
        ))}
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.75, duration: 0.45 }}
      className="absolute -left-4 top-16 hidden rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 shadow-xl shadow-gray-200/50 dark:shadow-black/20 md:block"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white">
          <Icon id="zap" className="w-4 h-4" />
        </span>
        <div>
          <p className="text-[10px] font-bold text-gray-900 dark:text-white">Fast by default</p>
          <p className="text-[9px] text-gray-500 dark:text-white/55">Optimized delivery</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.45 }}
      className="absolute -right-3 bottom-16 hidden rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 shadow-xl shadow-gray-200/50 dark:shadow-black/20 md:block"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5044E5] to-[#4d8cea] text-white">
          <Icon id="check" className="w-4 h-4" />
        </span>
        <div>
          <p className="text-[10px] font-bold text-gray-900 dark:text-white">Production ready</p>
          <p className="text-[9px] text-gray-500 dark:text-white/55">Built to last</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// New Tech Card Component with official logos
const TechCard = ({ techKey, index }) => {
  const logo = techLogos[techKey];
  const color = techColors[techKey] || "#5044E5";
  const name = techKey === "nextjs" ? "Next.js"
    : techKey === "reactnative" ? "React Native"
    : techKey === "node" ? "Node.js"
    : techKey === "postgresql" ? "PostgreSQL"
    : techKey === "mongodb" ? "MongoDB"
    : techKey === "mysql" ? "MySQL"
    : techKey === "tailwind" ? "Tailwind CSS"
    : techKey === "typescript" ? "TypeScript"
    : techKey === "javascript" ? "JavaScript"
    : techKey === "github" ? "GitHub"
    : techKey === "aws" ? "AWS"
    : techKey === "html" ? "HTML5"
    : techKey === "css" ? "CSS3"
    : techKey.charAt(0).toUpperCase() + techKey.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: 0.04 * index }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group/card relative flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3.5 py-3 shadow-sm transition-all duration-300 hover:border-[#5044E5]/30 hover:shadow-lg hover:shadow-[#5044E5]/10"
    >
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover/card:scale-110"
        style={{ color, backgroundColor: `${color}14` }}
      >
        {logo}
      </span>
      <span className="text-xs font-semibold text-gray-800 dark:text-white/90">
        {name}
      </span>
      <motion.span
        className="ml-auto size-1.5 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

const Technologies = () => {
  usePageMeta(
    "Technologies | RusoBros Tech",
    "RusoBros Tech builds with React, Next.js, JavaScript, TypeScript, Tailwind CSS, React Native, Flutter, Node.js, Laravel, PHP, MySQL, PostgreSQL, MongoDB, cloud deployment, APIs, and modern development practices."
  );

  return (
    <div className="overflow-x-clip bg-white dark:bg-gray-950">
      <section className={`relative overflow-hidden ${container} pt-16 sm:pt-24 pb-16 sm:pb-24`}>
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-32 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[#5044E5]/15 blur-3xl" />
        <div className="absolute top-16 right-[5%] h-72 w-72 rounded-full bg-[#4d8cea]/20 blur-3xl" />
        <div className="absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-[#147AFF]/15 blur-3xl" />

        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
              Engineering · Product · Growth
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl xl:text-6xl font-medium leading-[1.08] tracking-tight text-gray-900 dark:text-white">
              Technology that turns{" "}
              <span className="bg-gradient-to-r from-[#147AFF] via-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
                ideas into products.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-500 dark:text-white/75">
              We combine modern frameworks, reliable infrastructure, and thoughtful engineering to
              build digital products that are fast, secure, and ready to grow with your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                Build with us
                <Icon id="arrow" className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 px-6 py-3.5 text-sm font-semibold text-gray-800 dark:text-white transition-all hover:scale-105 hover:border-[#5044E5]/40 hover:shadow-lg dark:hover:bg-gray-900"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-white/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <ArchitectureVisual />
        </div>
      </section>

      <section className={`${container} pb-4`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 bg-white dark:bg-gray-950 p-5 sm:p-6"
            >
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-gray-500 dark:text-white/65">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      <TechLogoStrip />

      {/* ===== ONE TEAM EVERY LAYER SECTION WITH OFFICIAL LOGOS ===== */}
      <section className={`${container} py-16 sm:py-24`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea]">
                Stack overview
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white">
                One team.{" "}
                <span className="bg-gradient-to-r from-[#147AFF] to-[#5044E5] bg-clip-text text-transparent">
                  Every layer.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-500 dark:text-white/75">
                From the first interface to the infrastructure that keeps it online, our stack is
                organized around the outcomes your product needs.
              </p>
            </div>

            <div className="inline-flex max-w-xs items-start gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white">
                <Icon id="target" className="w-4 h-4" />
              </span>
              <p className="text-xs font-semibold leading-relaxed text-gray-700 dark:text-white/85">
                Selected for outcomes, not trends — every technology has a clear role.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {Object.entries(groupTechLogos).map(([groupName, techs], groupIndex) => {
              const details = groupDetails[groupName] || {
                description: "Practical tools for reliable product delivery.",
                color: "#5044E5",
              };

              return (
                <motion.article
                  key={groupName}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * groupIndex }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm shadow-gray-100 dark:shadow-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#5044E5]/30 hover:shadow-xl hover:shadow-[#5044E5]/10 dark:hover:shadow-white/5 sm:p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#147AFF] via-[#5044E5] to-[#4d8cea] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="flex items-start gap-4">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ color: details.color, backgroundColor: `${details.color}14` }}
                    >
                      {groupName === "Frontend" && <SiReact className="w-5 h-5" />}
                      {groupName === "Mobile" && <SiReact className="w-5 h-5" />}
                      {groupName === "Backend" && <SiNodedotjs className="w-5 h-5" />}
                      {groupName === "Databases" && <SiPostgresql className="w-5 h-5" />}
                      {groupName === "APIs & Integrations" && <SiExpress className="w-5 h-5" />}
                      {groupName === "Deployment" && <SiDocker className="w-5 h-5" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                          {groupName}
                        </h3>
                        <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-white/65">
                          {techs.length} tools
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-gray-500 dark:text-white/65">
                        {details.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {techs.map((techKey, itemIndex) => (
                      <TechCard key={techKey} techKey={techKey} index={itemIndex} />
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${container} pb-16 sm:pb-24`}>
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-gray-950 p-6 shadow-2xl shadow-gray-900/20 dark:shadow-black/30 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#147AFF]/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#5044E5]/20 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/80">
                Engineering principles
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight tracking-tight text-white">
                Built to perform today.{" "}
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#8B5CF6] bg-clip-text text-transparent">
                  Ready to scale tomorrow.
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-white/70">
                Technology is only valuable when it supports the business. We choose tools that make
                products easier to use, safer to operate, and simpler to improve.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Performance", "Security", "Maintainability", "Scalability"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/85"
                  >
                    <span className="size-1.5 rounded-full bg-[#60A5FA]" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.09]"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#147AFF]/20 to-[#5044E5]/20 text-[#60A5FA]">
                    <Icon id={principle.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-white">{principle.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/65">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Have a technical challenge?"
        title="Let's choose the stack that fits your goals."
        description="Tell us what you're building and we'll recommend a practical, scalable technology plan."
        buttonLabel="Talk to an Engineer"
        buttonTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </div>
  );
};

export default Technologies;