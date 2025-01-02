import React, { useState } from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

const slideVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
  },
};

export const Layout422 = (props) => {
  const { tagline, heading, description, features, className = '' } = {
    ...Layout422Defaults,
    ...props,
  };

  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);

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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.url}
              className="relative flex w-full flex-col overflow-hidden rounded-lg md:w-1/2 lg:h-full lg:transition-all lg:duration-200 lg:hover:w-[70%]"
              onMouseEnter={() => setHoveredFeatureIdx(index)}
              onMouseLeave={() => setHoveredFeatureIdx(null)}
            >
              <div className="group absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-cod-gray/50" />
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8 lg:p-12">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-cod-gray/50" />
                <div className="z-10">
                  <p className="mb-2 font-heading text-base font-semibold text-white">
                    {feature.tagline}
                  </p>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {feature.heading}
                  </h3>
                  <div className="lg:hidden">
                    <p className="mt-4 sm:mt-5 font-sans text-white/90 md:mt-6">
                      {feature.description}
                    </p>
                    <div className="mt-6 md:mt-8">
                      <Button 
                        {...feature.button}
                        className="text-white hover:text-white/90 font-semibold inline-flex items-center gap-1"
                      >
                        {feature.button.title}
                        <ChevronRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {hoveredFeatureIdx === index && (
                    <motion.div
                      className="z-10 hidden lg:block lg:w-[528px]"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-4 sm:mt-5 font-sans text-white/90 md:mt-6">
                        {feature.description}
                      </p>
                      <div className="mt-6 md:mt-8">
                        <Button 
                          {...feature.button}
                          className="text-white hover:text-white/90 font-semibold inline-flex items-center gap-1"
                        >
                          {feature.button.title}
                          <ChevronRight className="size-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout422Defaults = {
  tagline: "Estate Planning Services",
  heading: "Secure Your Legacy and Protect Your Assets",
  description: "Our comprehensive estate planning services help you make informed decisions about your future, ensuring your wishes are honored and your loved ones are protected.",
  features: [
    {
      tagline: "Wills & Trusts",
      url: "#",
      heading: "Comprehensive Estate Documentation",
      description: "Create legally sound wills and establish trusts to protect your assets and ensure they are distributed according to your wishes. Our experienced attorneys guide you through every step of the process.",
      image: {
        src: placeholderImage,
        alt: "Estate Planning - Wills and Trusts",
      },
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
    {
      tagline: "Powers of Attorney",
      url: "#",
      heading: "Advanced Directives & POA",
      description: "Establish powers of attorney and healthcare directives to ensure your interests are protected if you become unable to make decisions. We help you plan for all contingencies.",
      image: {
        src: placeholderImage,
        alt: "Estate Planning - Powers of Attorney",
      },
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
  ],
};
