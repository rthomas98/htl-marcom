import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@relume_io/relume-ui";

const placeholderImage = '/images/placeholder.svg';

export const Layout351 = (props) => {
  const { tagline, heading, description, features, className = '' } = {
    ...Layout351Defaults,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetIsActive = (index) => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === index && features.filter((_, i) => i === prevIndex).length === 1) {
        return prevIndex;
      }
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-12 w-full max-w-3xl md:mb-16 lg:mb-20">
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
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-gallery bg-white lg:h-[90vh] lg:flex-row">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              isActive={activeIndex === index}
              setIsActive={() => handleSetIsActive(index)}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ isActive, setIsActive, ...feature }) => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  
  return (
    <motion.div
      className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-gallery last:border-r-0"
      onClick={setIsActive}
      animate={{
        width: isMobile ? "100%" : isActive ? "100%" : "5rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-gallery py-8 first:border-t-0 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
        <p className="absolute left-6 whitespace-nowrap font-heading text-lg font-bold text-cod-gray md:left-10 md:text-xl lg:relative lg:left-0">
          {feature.columnText}
        </p>
        <h3 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:font-heading lg:text-xl lg:font-bold lg:text-cod-gray">
          {feature.verticalText}
        </h3>
        <p className="font-heading text-lg font-bold text-cod-gray md:text-xl lg:hidden">
          {feature.horizontalText}
        </p>
      </div>
      {isMobile ? (
        <motion.div
          className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[40rem] lg:overflow-auto"
          animate={{
            height: isActive ? "auto" : "0px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FeatureContent feature={feature} />
        </motion.div>
      ) : (
        <div className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[40rem] lg:overflow-auto">
          <FeatureContent feature={feature} />
        </div>
      )}
    </motion.div>
  );
};

const FeatureContent = ({ feature }) => (
  <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-8 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
    <h3 className="mb-4 font-heading text-2xl font-bold text-cod-gray sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
      {feature.heading}
    </h3>
    <p className="font-sans text-base text-cod-gray-light sm:text-lg">
      {feature.description}
    </p>
    <div className="mt-6 h-64 sm:mt-8 sm:h-80 md:mt-10 md:h-[25rem] lg:mt-12">
      <img
        src={feature.image.src}
        alt={feature.image.alt}
        className="size-full rounded-lg object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

export const Layout351Defaults = {
  tagline: "Entity Formation",
  heading: "Building Strong Foundations for Your Business",
  description: "Expert guidance in selecting and establishing the right business structure to protect your interests and support your growth objectives.",
  features: [
    {
      columnText: "01",
      verticalText: "LLC Formation",
      horizontalText: "LLC Formation",
      heading: "Limited Liability Company",
      description: "Protect your personal assets while maintaining operational flexibility. Our LLC formation services include operating agreements, member agreements, and all necessary state filings.",
      image: {
        src: placeholderImage,
        alt: "LLC Formation Services",
      },
    },
    {
      columnText: "02",
      verticalText: "Corporations",
      horizontalText: "Corporations",
      heading: "C-Corps & S-Corps",
      description: "Strategic incorporation services to establish your business as a corporation. We handle shareholder agreements, bylaws, and compliance requirements to ensure proper corporate governance.",
      image: {
        src: placeholderImage,
        alt: "Corporation Formation Services",
      },
    },
    {
      columnText: "03",
      verticalText: "Partnerships",
      horizontalText: "Partnerships",
      heading: "Partnership Structures",
      description: "Comprehensive partnership formation services including partnership agreements, profit sharing structures, and liability protection strategies for all partners involved.",
      image: {
        src: placeholderImage,
        alt: "Partnership Formation Services",
      },
    },
    {
      columnText: "04",
      verticalText: "Non-Profits",
      horizontalText: "Non-Profits",
      heading: "Non-Profit Organizations",
      description: "Specialized services for establishing non-profit organizations, including 501(c)(3) applications, board governance structures, and compliance with state and federal regulations.",
      image: {
        src: placeholderImage,
        alt: "Non-Profit Formation Services",
      },
    },
  ],
};
