import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import SplitSection from "../components/SplitSection";
import CTASection from "../components/CTASection";
import usePageMeta from "../hooks/usePageMeta";

const approach = [
  { icon: "target", title: "Business Understanding", desc: "We start with your operations, problems, and goals — not just the tech." },
  { icon: "palette", title: "UI/UX Design", desc: "Interfaces that feel premium, clear, and effortless for your users." },
  { icon: "layers", title: "Full-Stack Engineering", desc: "Reliable frontend and backend built with scalable architecture." },
  { icon: "mobile", title: "Mobile Development", desc: "Native-quality apps for Android and iOS from a shared codebase." },
  { icon: "rocket", title: "Product Thinking", desc: "We build software that solves real problems, not just features." },
  { icon: "cloud", title: "Deployment", desc: "Smooth launches on reliable hosting with automated pipelines." },
  { icon: "wrench", title: "Continuous Support", desc: "Updates, fixes, and improvements long after the launch." },
];

const About = () => {
  usePageMeta(
    "About Us | RusoBros Tech",
    "RusoBros Tech is a technology solutions company focused on building reliable, scalable, and user-friendly digital products for businesses."
  );

  return (
    <div className="overflow-x-clip">
      {/* Page header */}
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            We Build Technology With{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Purpose.
            </span>
          </>
        }
        desc="RusoBros Tech is a technology solutions company focused on building reliable, scalable, and user-friendly digital products for businesses."
      />

      {/* Story */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white">
              Technology that solves real business problems.
            </h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-white/75 leading-relaxed">
              We work with startups, small businesses, growing companies, and organizations that
              need technology to solve real operational problems.
            </p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-white/75 leading-relaxed">
              Every product we build starts with the same question: how will this make the business
              work better? From there, we design, engineer, launch, and support software that stays
              useful long after day one.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm px-7 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Our Services
                <Icon id="arrow" className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Our Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-xl shadow-gray-100 dark:shadow-white/5">
              <span className="size-11 rounded-xl bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white flex items-center justify-center mb-4">
                <Icon id="target" className="w-6 h-6" />
              </span>
              <h4 className="font-bold text-gray-900 dark:text-white">Our Mission</h4>
              <p className="text-sm text-gray-500 dark:text-white/70 mt-2">
                To make powerful technology accessible, practical, and useful for every business.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-xl shadow-gray-100 dark:shadow-white/5">
              <span className="size-11 rounded-xl bg-gradient-to-br from-[#5044E5] to-[#4d8cea] text-white flex items-center justify-center mb-4">
                <Icon id="eye" className="w-6 h-6" />
              </span>
              <h4 className="font-bold text-gray-900 dark:text-white">Our Vision</h4>
              <p className="text-sm text-gray-500 dark:text-white/70 mt-2">
                To build digital products that become an essential part of how businesses operate and grow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <SplitSection
        eyebrow="How We Work"
        title="From a conversation to a product your business depends on."
        desc="We pair business thinking with full-stack engineering, so every decision — technology, design, architecture — serves a real outcome."
        bullets={[
          "We start with your operations, problems, and goals",
          "Interfaces engineered to feel premium and clear",
          "Scalable frontend, backend, and data architecture",
          "Updates, fixes, and improvements after launch",
        ]}
        visual="architecture"
        label="Built End to End"
        chips={[
          { icon: "target", label: "Understand", className: "-top-5 -left-3 sm:-left-6" },
          { icon: "rocket", label: "Launch", className: "-top-5 -right-3 sm:-right-6" },
          { icon: "wrench", label: "Support", className: "bottom-6 -left-4 sm:-left-8" },
        ]}
        ctaLabel="See What We Build"
        ctaTo="/portfolio"
      />

      {/* Approach */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-12 sm:py-20">
        <SectionHeading
          title="Our Approach"
          desc="How we take ideas from a conversation to a product your business depends on."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto mt-12">
          {approach.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              viewport={{ once: true }}
              key={item.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <span className="size-11 rounded-xl bg-gradient-to-br from-[#147AFF]/15 to-[#5044E5]/15 text-primary flex items-center justify-center mb-4">
                <Icon id={item.icon} className="w-6 h-6" />
              </span>
              <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-white/70 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Need Business Software?"
        title="Let's build software around the way your business actually works."
        description="Tell us about your operations and we'll design a solution that fits them."
        buttonLabel="Talk to Our Team"
        buttonTo="/contact"
      />
    </div>
  );
};

export default About;