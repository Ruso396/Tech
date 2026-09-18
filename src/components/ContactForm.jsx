import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Icon from "../assets/icons";
import { FORM_ACCESS_KEY, SERVICE_OPTIONS, BUDGET_OPTIONS, BRAND } from "../data/content";

const inputClass =
  "w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";
const labelClass = "mb-2 block text-sm font-medium";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", FORM_ACCESS_KEY);

    const toastId = toast.loading("Sending your enquiry...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Thank you! We'll get back to you soon.", { id: toastId });
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      onSubmit={onSubmit}
      className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 p-6 sm:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name
          </label>
          <input id="name" type="text" name="name" placeholder="Enter your name" className={inputClass} required />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" type="email" name="email" placeholder="Enter your email" className={inputClass} required />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" type="tel" name="phone" placeholder="Enter your phone number" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" type="text" name="company" placeholder="Company / organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service Required
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} className="text-gray-900 bg-white">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a budget range
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className="text-gray-900 bg-white">
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className={labelClass}>
            Project Details
          </label>
          <textarea
            id="details"
            rows={7}
            name="message"
            placeholder="Tell us what you're building, the problem you're solving, and any goals you have in mind."
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
        <p className="text-xs text-gray-500 dark:text-white/50">
          Prefer email? Write to us at{" "}
          <a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">
            {BRAND.email}
          </a>
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white text-sm px-10 py-3.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Send Enquiry
          <Icon id="arrow" className="w-4 h-4" />
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;