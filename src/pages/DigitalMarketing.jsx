import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import PageHeader from "../components/PageHeader";
import SplitSection from "../components/SplitSection";
import CTASection from "../components/CTASection";
import usePageMeta from "../hooks/usePageMeta";

const marketingServices = [
  {
    icon: "users",
    title: "Social Media Management",
    description: "Profiles, posting calendars, community engagement, and consistent branded presence.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "megaphone",
    title: "Social Media Marketing",
    description: "Campaigns and content strategies that put your products in front of the right audience.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "search",
    title: "Search Engine Optimization",
    description: "Technical and content SEO that helps your website rank higher and attract real visitors.",
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "file",
    title: "Content Strategy",
    description: "Clear messaging, blog plans, and content that supports both SEO and business goals.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "target",
    title: "Digital Advertising Support",
    description: "Ad platform setup, campaign structure, and performance guidance for measurable results.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "eye",
    title: "Website SEO Optimization",
    description: "On-page structure, speed, and technical fixes that make your site more discoverable.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "pin",
    title: "Google Business Profile Support",
    description: "Profile optimization and management to help local customers find and trust your business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "web",
    title: "Landing Page Development",
    description: "Conversion-focused landing pages designed to turn visitors into leads and customers.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "chart",
    title: "Conversion Optimization",
    description: "A/B testing, funnel improvements, and UX tweaks that improve results over time.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: "sliders",
    title: "Analytics & Performance Tracking",
    description: "Setup, dashboards, and reporting so you always know what is — and isn't — working.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
];

const MarketingCard = ({ service, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    viewport={{ once: true }}
    className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5044E5]/10 transition-all duration-300"
  >
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#147AFF]/15 via-transparent to-[#5044E5]/15 opacity-70" />
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
    </div>
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="size-10 shrink-0 rounded-xl bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white flex items-center justify-center shadow-lg shadow-[#5044E5]/25">
          <Icon id={service.icon} className="w-5 h-5" />
        </span>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{service.title}</h3>
      </div>
      <p className="text-sm text-gray-500 dark:text-white/70 mt-3">{service.description}</p>
    </div>
  </motion.div>
);

const DigitalMarketing = () => {
  usePageMeta(
    "Digital Marketing | RusoBros Tech",
    "RusoBros Tech provides digital marketing support — social media management, SEO, content strategy, digital advertising, landing pages, conversion optimization, and analytics."
  );

  return (
    <div className="overflow-x-clip">
      <PageHeader
        eyebrow="Digital Marketing"
        title={
          <>
            Build Your Product. Grow Your{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Digital Presence.
            </span>
          </>
        }
        desc="Technology alone isn't enough. We also help businesses improve their online presence and reach the right audience."
      />

      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {marketingServices.map((s, i) => (
            <MarketingCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Growth visual split */}
      <SplitSection
        reverse
        eyebrow="Measure What Matters"
        title="A presence you can see, follow, and improve."
        desc="We help you set up reporting that connects marketing effort to business results — so every campaign, page, and post earns its place."
        bullets={[
          "Analytics and dashboards that are actually clear",
          "SEO, content, and ads aligned to growth goals",
          "Landing pages built to convert, not just look good",
          "Ongoing tweaks based on data — not guesswork",
        ]}
        visual="analytics"
        label="Growth Analytics"
        chips={[
          { icon: "search", label: "SEO", className: "-top-5 -right-3 sm:-right-6" },
          { icon: "chart", label: "Analytics", className: "bottom-8 -left-4 sm:-left-8" },
        ]}
        ctaLabel="Grow With Us"
        ctaTo="/contact"
      />

      {/* Support service note */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
        >
          <div className="flex gap-4 items-start">
            <span className="size-11 shrink-0 rounded-xl bg-gradient-to-br from-[#5044E5] to-[#4d8cea] text-white flex items-center justify-center">
              <Icon id="rocket" className="w-6 h-6" />
            </span>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Marketing that supports great technology.</h3>
              <p className="text-sm text-gray-500 dark:text-white/70 mt-1.5 max-w-2xl">
                We see digital marketing as a support service that runs alongside our technology
                solutions — helping the products we build reach the people who need them.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-primary text-white text-sm px-7 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Grow With Us
            <Icon id="arrow" className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <CTASection
        eyebrow="Ready to grow?"
        title="Let's grow your brand — and the product behind it."
        description="Share your goals and we'll put together a plan that covers technology and presence."
        buttonLabel="Grow With Us"
        buttonTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </div>
  );
};

export default DigitalMarketing;