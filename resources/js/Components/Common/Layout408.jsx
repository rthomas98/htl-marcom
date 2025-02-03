import React, { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ChevronRight, Shield, Bell, FileText } from 'lucide-react';
import clsx from "clsx";

const placeholderImage = '/images/placeholder.svg';

const calculateScales = (totalSections, scrollYProgress) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

const FeatureSectionContent = ({ isEven, ...featureSection }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 sm:p-8 lg:p-12",
        isEven ? "md:order-first" : "md:order-last",
      )}
    >
      <p className="mb-2 font-heading text-base sm:text-lg font-semibold text-pippin-darker">
        {featureSection.tagline}
      </p>
      <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray leading-tight md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p className="font-sans text-base sm:text-lg text-cod-gray-light">
        {featureSection.description}
      </p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        {featureSection.buttons.map((button, index) => (
          <Link
            key={index}
            href={button.href}
            className={clsx(
              "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
              button.variant === 'primary'
                ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                : "bg-transparent text-cod-gray hover:bg-cod-gray hover:text-white"
            )}
          >
            {button.title}
            {button.iconRight && <ChevronRight className="size-4" />}
          </Link>
        ))}
      </div>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center",
        isEven ? "md:order-last" : "md:order-first",
      )}
    >
      <img 
        src={featureSection.image.src} 
        alt={featureSection.image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </React.Fragment>
);

const FeatureSection = ({ scale, index, ...featureSection }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="static grid grid-cols-1 content-center overflow-hidden rounded-lg border border-gallery bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
      style={{ scale }}
    >
      <FeatureSectionContent isEven={isEven} {...featureSection} />
    </motion.div>
  );
};

export const Layout408 = (props) => {
  const { tagline, heading, description, featureSections, className = '' } = {
    ...Layout408Defaults,
    ...props,
  };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-8 sm:mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4">
            {tagline}
          </p>
          <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="font-sans text-base sm:text-lg text-cod-gray-light">
            {description}
          </p>
        </div>
        <div ref={containerRef} className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0">
          {featureSections.map((featureSection, index) => (
            <FeatureSection key={index} {...featureSection} scale={scales[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout408Defaults = {
  tagline: "Privacy & Data Protection",
  heading: "Safeguard Your Business & Customer Data",
  description: "Comprehensive privacy and data protection services to help your business navigate the complex landscape of data security and compliance requirements.",
  featureSections: [
    {
      tagline: "Data Compliance",
      heading: "Stay Compliant with Privacy Laws",
      description: "Our team helps you understand and implement data protection requirements, ensuring compliance with GDPR, CCPA, and other relevant privacy regulations.",
      buttons: [
        { 
          title: "Schedule Consultation",
          variant: "primary",
          href: "#"
        },
        {
          title: "Learn More",
          variant: "link",
          href: "#",
          iconRight: true,
        },
      ],
      image: {
        src: placeholderImage,
        alt: "Data Compliance Services",
      },
    },
    {
      tagline: "Breach Response",
      heading: "Incident Response Planning",
      description: "Develop and implement comprehensive data breach response plans to minimize impact and ensure swift, effective action in case of security incidents.",
      buttons: [
        { 
          title: "Schedule Consultation",
          variant: "primary",
          href: "#"
        },
        {
          title: "Learn More",
          variant: "link",
          href: "#",
          iconRight: true,
        },
      ],
      image: {
        src: placeholderImage,
        alt: "Data Breach Response Planning",
      },
    },
    {
      tagline: "Training & Implementation",
      heading: "Privacy-First Culture",
      description: "Custom training programs and implementation strategies to build a privacy-aware culture and ensure consistent data protection practices across your organization.",
      buttons: [
        { 
          title: "Schedule Consultation",
          variant: "primary",
          href: "#"
        },
        {
          title: "Learn More",
          variant: "link",
          href: "#",
          iconRight: true,
        },
      ],
      image: {
        src: placeholderImage,
        alt: "Privacy Training and Implementation",
      },
    },
  ],
};
