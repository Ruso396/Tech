import React from "react";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import usePageMeta from "../hooks/usePageMeta";
import { BRAND } from "../data/content";

const contactItems = [
  {
    icon: "mail",
    label: "Email Us",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: "phone",
    label: "Call / WhatsApp",
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`,
  },
  {
    icon: "pin",
    label: "Location",
    value: BRAND.location,
    href: undefined,
  },
  {
    icon: "chat",
    label: "Response Time",
    value: "We usually reply within 1–2 business days",
    href: undefined,
  },
];

const Contact = () => {
  usePageMeta(
    "Contact Us | RusoBros Tech",
    "Contact RusoBros Tech to start your project. Tell us what you're building and get a practical plan for a digital solution."
  );

  return (
    <div className="overflow-x-clip">
      <PageHeader
        eyebrow="Contact Us"
        title={
          <>
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Great Together.
            </span>
          </>
        }
        desc="Tell us what you're building, what problem you're trying to solve, or what you want to improve. Our team can help turn your idea into a practical digital solution."
      />

      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactItems.map((item) => {
              const inner = (
                <>
                  <span className="size-11 rounded-xl bg-gradient-to-br from-[#147AFF]/15 to-[#5044E5]/15 text-primary flex items-center justify-center mb-4 shrink-0">
                    <Icon id={item.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1 break-words">
                      {item.value}
                    </p>
                  </div>
                </>
              );
              const cls =
                "flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg shadow-gray-100 dark:shadow-white/5 hover:border-primary/40 transition-colors";
              return item.href ? (
                <a key={item.label} href={item.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={item.label} className={cls}>
                  {inner}
                </div>
              );
            })}

            <div className="rounded-2xl bg-gradient-to-br from-[#147AFF] via-[#5044E5] to-[#4d8cea] p-6 text-white shadow-xl shadow-[#5044E5]/25">
              <h3 className="font-bold">Prefer to start simple?</h3>
              <p className="text-sm text-white/85 mt-1.5">
                Send us one line about your idea and we'll reply with a few quick questions.
              </p>
              <a
                href={`mailto:${BRAND.email}?subject=Project%20Enquiry%20—%20RusoBros%20Tech`}
                className="mt-5 inline-flex items-center gap-2 bg-white text-[#5044E5] font-semibold text-sm px-6 py-2.5 rounded-full hover:scale-105 transition-all"
              >
                {BRAND.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;