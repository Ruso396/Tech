import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import usePageMeta from "../hooks/usePageMeta";
import { allServices } from "../data/content";

const Services = () => {
  usePageMeta(
    "Services | RusoBros Tech — Full-Stack Development, Web, Mobile, eCommerce & Business Software",
    "RusoBros Tech provides full-stack development, website development, mobile apps, eCommerce, SaaS, custom business software, API development, database, UI/UX, cloud deployment, and maintenance support."
  );

  return (
    <div className="overflow-x-clip">
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Our{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Services
          </>
        }
        desc="Everything your business needs to build, launch, and grow digital products — from the first line of code to ongoing support."
      />

      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {allServices.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Ready to start?"
        title="Let's build the right solution for your business."
        description="Tell us what you're building and get a practical plan from our team."
        buttonLabel="Start a Project"
        buttonTo="/contact"
        secondaryLabel="Browse Products"
        secondaryTo="/products"
      />
    </div>
  );
};

export default Services;