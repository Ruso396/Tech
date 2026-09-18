import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import SplitSection from "../components/SplitSection";
import CTASection from "../components/CTASection";
import TechLogoStrip from "../components/TechLogoStrip";
import { UIMockup } from "../components/mockups/Mockups";
import usePageMeta from "../hooks/usePageMeta";
import { servicePreview } from "../data/content";

/* ---------- Rich hero with layered backgrounds, glow, and a large product shot ---------- */
const Hero = () => (
  <section className="relative flex flex-col items-center gap-6 pt-12 sm:pt-20 pb-10 sm:pb-16 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
    {/* Subtle reference-style glow: small top-right blob only (dark:hidden like the reference site) */}
    <div className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 w-[26rem] h-[26rem] rounded-full bg-[#5044E5]/20 blur-3xl dark:hidden pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center gap-6">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 p-1.5 pr-4 rounded-full max-w-full flex-wrap"
      >
        <span className="size-5 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
        <p className="text-xs font-medium">Design • Development • Technology • Growth</p>
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl tracking-tight"
      >
        We Build Digital Solutions That Move{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          Your Business
        </span>{" "}
        Forward.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 sm:max-w-lg pb-3"
      >
        From custom software and full-stack applications to mobile apps, eCommerce platforms, and
        business automation — RusoBros Tech builds technology around the way your business works.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-3 pt-1"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white text-sm px-6 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Start Your Project
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all"
        >
          Explore Our Solutions
        </Link>
      </motion.div>

      {/* Large product shot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="relative w-full"
      >
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl border border-gray-200/70 dark:border-gray-800 shadow-2xl shadow-[#5044E5]/15">
          <img
            src="https://agencyai-01.netlify.app/assets/hero_img-ySDs5NA2.png"
            alt="RusoBros Tech digital solutions hero banner"
            loading="eager"
            decoding="async"
            className="w-full relative z-10"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------- Meet the Founder ---------- */
const FounderSection = () => (
  <section className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 pt-8 sm:pt-12 pb-12 sm:pb-16 text-gray-700 dark:text-white">
    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#147AFF]/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#5044E5]/10 blur-3xl" />

    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto w-full max-w-md lg:max-w-none"
      >
        <div className="absolute -top-8 -right-8 w-56 h-56 rounded-full bg-gradient-to-br from-[#147AFF]/25 to-[#5044E5]/25 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-2 shadow-2xl shadow-[#5044E5]/15 backdrop-blur">
          <img
            src="https://www.alphajwc.com/wp-content/uploads/2023/04/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background.jpg"
            alt="Kalam Ruso K — Founder & CEO of RusoBros Tech"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-[calc(2rem-0.5rem)]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea]">
          <span className="size-2 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
          Founder & CEO
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white">
          Meet the{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Founder
          </span>
        </h2>

        <p className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Kalam Ruso K</p>
        <p className="mt-1 text-sm font-semibold text-gray-500 dark:text-white/70">
          Founder & CEO — RusoBros Tech
        </p>

        <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-gray-500 dark:text-white/75">
          Kalam Ruso K built RusoBros Tech to turn complex business challenges into simple, powerful
          digital products. Leading a team of engineers, designers, and strategists, he focuses on
          delivering modern, reliable, and scalable IT solutions — from full-stack web platforms and
          mobile apps to business automation and cloud infrastructure.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm px-7 py-3.5 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Talk to the Founder
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ---------- Head of Marketing ---------- */
const HeadOfMarketingSection = () => (
  <section className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 pt-8 sm:pt-12 pb-12 sm:pb-16 text-gray-700 dark:text-white">
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#5044E5]/10 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#147AFF]/10 blur-3xl" />

    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto w-full max-w-[240px] sm:max-w-[300px] md:max-w-xs lg:max-w-none"
      >
        <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-gradient-to-br from-[#5044E5]/25 to-[#4d8cea]/25 blur-3xl sm:-top-8 sm:-right-8 sm:w-56 sm:h-56" />
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-2 shadow-2xl shadow-[#5044E5]/15 backdrop-blur">
          <img
            src="https://res.cloudinary.com/dvrihrxrh/image/upload/v1789728905/ChatGPT_Image_Sep_18_2026_04_24_08_PM_fnftdy.png"
            alt="Arul Sundar — Head of Marketing at RusoBros Tech"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-[calc(2rem-0.5rem)]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#5044E5] dark:text-[#4d8cea]">
          <span className="size-2 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
          Head of Marketing
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight tracking-tight text-gray-900 dark:text-white">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Marketing Head
          </span>
        </h2>

        <p className="mt-6 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Arul Sundar</p>
        <p className="mt-1 text-sm font-semibold text-gray-500 dark:text-white/70">
          Head of Marketing — RusoBros Tech
        </p>

        <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-gray-500 dark:text-white/75">
          Arul Sundar leads marketing at RusoBros Tech, driving brand growth, digital campaigns,
          and customer reach across the products and solutions we build. With a clear focus on
          measurable results, he connects our technology to the right audience — through social
          media, SEO, content, advertising, and data-backed strategy.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm px-7 py-3.5 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Work With Us
          <Icon id="arrow" className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

const Home = () => {
  usePageMeta(
    "RusoBros Tech | Full-Stack Development & Digital Solutions",
    "RusoBros Tech builds modern websites, web applications, mobile apps, eCommerce platforms, business software, and custom digital solutions for growing businesses."
  );

  return (
    <div className="overflow-x-clip">
      <Hero />
      <FounderSection />
      <TechLogoStrip />

      {/* Trust / Intro */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-8 sm:pt-14 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Why RusoBros Tech"
            title="Technology Built Around Your Business"
            desc="We don't believe in one-size-fits-all software. RusoBros Tech combines thoughtful UI/UX, reliable engineering, scalable architecture, and business-focused thinking to create digital solutions that are practical, powerful, and built to grow."
          />
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["Full-Stack Development", "Business Solutions", "Digital Products"].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-white shadow-sm"
              >
                <Icon id="check" className="w-4 h-4 text-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <HeadOfMarketingSection />

      {/* Services Preview */}
      <section className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-8 sm:pt-14 pb-12 sm:pb-16 text-gray-700 dark:text-white">
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30 pointer-events-none" />
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Everything You Need to Build and Grow Digitally"
            desc="From full-stack platforms to mobile apps, eCommerce, and business software — one team for the entire lifecycle of your product."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-12">
            {servicePreview.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} compact />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View All Services
              <Icon id="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
<section className="relative w-full overflow-hidden px-4 pt-8 pb-8 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16 xl:px-20 2xl:px-28">
  {/* Background glow */}
  <div className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-[#5044E5]/10 blur-3xl" />

  <div className="relative mx-auto w-full max-w-[1400px] -mt-20 sm:-mt-16">
    <SplitSection
      eyebrow="Featured Product"
      title={
        <>
          Run Your Business{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Smarter.
          </span>
        </>
      }
      desc="From creating GST invoices to tracking purchases, customers, payments, and reports, our billing platform brings everyday business operations into one powerful system."
      bullets={[
        "GST Billing & Invoices",
        "WhatsApp Invoice Sharing",
        "Purchase & Inventory",
        "Payments, Customers & Reports",
      ]}
      visual="billing"
      label="Billing & Business Management"
      chips={[
        {
          icon: "file",
          label: "Invoices",
          className: "-top-5 -right-2 sm:-right-4",
        },
        {
          icon: "chart",
          label: "Live Reports",
          className: "bottom-5 -left-2 sm:-left-4",
        },
      ]}
      ctaLabel="Explore Product"
      ctaTo="/products/billing"
      gap="gap-8 lg:gap-12 xl:gap-16"
      visualMaxWidth="w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[640px]"
    />
  </div>
</section>
      {/* Full-Stack visual split */}
      <div className="-mt-20 sm:-mt-16 text-gray-700 dark:text-white">
        <SplitSection
          eyebrow="Full-Stack Development"
          title="One Team for the Entire Product Lifecycle"
          desc="We design, build, ship, and maintain complete products — frontend, backend, databases, integrations, and deployment working as one system. No handoffs, no gaps."
          bullets={[
            "Modern React & Next.js frontends",
            "Secure Node.js & Laravel backends",
            "Cloud deployment, CI/CD, and monitoring",
            "Ongoing support after launch",
          ]}
          visual="architecture"
          label="Full-Stack Architecture"
          chips={[
            { icon: "web", label: "Frontend", className: "-top-5 -left-3 sm:-left-6" },
            { icon: "server", label: "Backend", className: "-top-5 -right-3 sm:-right-6" },
            { icon: "cloud", label: "Deploy", className: "bottom-6 -left-4 sm:-left-8" },
          ]}
          ctaLabel="See What We Build"
          ctaTo="/portfolio"
        />
      </div>

      {/* Business software visual split (reversed) */}
      <div className="-mt-20 sm:-mt-16 text-gray-700 dark:text-white">
        <SplitSection
          reverse
          eyebrow="Business Software"
          title="Software That Fits Your Workflows"
          desc="When ready-made tools fall short, we design custom business software — CRM, inventory, billing, automation, and analytics — built around the way your business actually operates."
          bullets={[
            "Billing, invoices, and GST",
            "Inventory and purchase management",
            "Customer relations and automation",
            "Dashboards and business reports",
          ]}
          visual="business"
          label="Business Operations"
          chips={[
            { icon: "briefcase", label: "CRM", className: "-top-5 -right-3 sm:-right-6" },
            { icon: "database", label: "Inventory", className: "bottom-8 -left-4 sm:-left-8" },
          ]}
          ctaLabel="Explore Products"
          ctaTo="/products"
        />
      </div>

      <div className="-mt-20 sm:-mt-16">
        <CTASection
          eyebrow="Let's work together"
          title="Let's turn your idea into a scalable digital product."
          description="Tell us about your goals and get a clear, practical plan for building the right solution."
          buttonLabel="Start a Project"
          buttonTo="/contact"
          secondaryLabel="Explore Our Work"
          secondaryTo="/portfolio"
        />
      </div>
    </div>
  );
};

export default Home;