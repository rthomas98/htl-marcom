import React, { useRef } from 'react';
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ChevronRight } from 'lucide-react';
import clsx from "clsx";
import { Link } from '@inertiajs/react';

const defaultContent = {
  tagline: "Our Process",
  heading: "Comprehensive Search Methodology",
  description: "We conduct thorough trademark searches using advanced tools and legal expertise to protect your brand.",
  featureSections: [
    {
      tagline: "Step 1",
      heading: "Federal Database Search",
      description:
        "We conduct a comprehensive search of the USPTO database to identify registered trademarks, pending applications, and abandoned marks that could conflict with your proposed trademark. This thorough analysis helps assess potential registration barriers.",
      buttons: [
        { 
          title: "Learn About USPTO Search", 
          variant: "secondary",
          className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white rounded-full",
          target: "_blank",
          href: "https://www.uspto.gov/trademarks/search"
        },
      
      ],
      image: {
        src: "/images/tm/search/shutterstock_2225224027.jpg",
        alt: "Federal trademark database search",
      },
    },
    {
      tagline: "Step 2",
      heading: "Common Law Search",
      description:
        "Beyond registered trademarks, we search for unregistered marks, business names, and domain names that might claim common law rights. This includes reviewing industry databases, social media, and business directories.",
      buttons: [
        { 
          title: "Common Law Rights", 
          variant: "secondary",
          className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white rounded-full",
          target: "_blank",
          href: "https://www.bitlaw.com/trademark/common.html"
        },
        
      ],
      image: {
        src: "/images/tm/search/shutterstock_2412987691.jpg",
        alt: "Common law trademark search",
      },
    },
    {
      tagline: "Step 3",
      heading: "Analysis & Recommendations",
      description:
        "We provide a detailed analysis of potential conflicts, assess the strength of your mark, and offer strategic recommendations. Our comprehensive report helps you make informed decisions about trademark registration and usage.",
      buttons: [
        { 
          title: "View Analysis Process", 
          variant: "secondary",
          className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white rounded-full",
          target: "_blank",
          href: "https://www.uspto.gov/trademarks/basics/trademark-process"
        }
      ],
      image: {
        src: "/images/tm/search/shutterstock_2428972501.jpg",
        alt: "Trademark analysis and recommendations",
      },
    },
  ],
};

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

const FeatureSection = ({ scale, index, ...featureSection }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isEven = index % 2 === 0;

  return (
    <React.Fragment>
      {isMobile ? (
        <div className="static grid grid-cols-1 content-center overflow-hidden rounded-lg border border-cod-gray/10 bg-white">
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </div>
      ) : (
        <motion.div
          className="static grid grid-cols-1 content-center overflow-hidden rounded-lg border border-cod-gray/10 bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
          style={{ scale }}
        >
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

const FeatureSectionContent = ({ isEven, ...featureSection }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 md:p-8 lg:p-12",
        isEven ? "md:order-first" : "md:order-last",
      )}
    >
      <p className="font-heading mb-2 text-lg font-semibold text-cod-gray/80">{featureSection.tagline}</p>
      <h2 className="font-heading mb-5 text-4xl font-bold leading-[1.2] text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p className="font-sans text-lg text-cod-gray/80">{featureSection.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        {featureSection.buttons.map((button, index) => {
          const { href, target, ...buttonProps } = button;
          return (
            <a key={index} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
              <Button 
                {...buttonProps}
                className={`${buttonProps.className} transition-colors duration-300`}
              >
                {button.title}
              </Button>
            </a>
          );
        })}
      </div>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center bg-pippin/10 p-8",
        isEven ? "md:order-last" : "md:order-first",
      )}
    >
      <img 
        src={featureSection.image.src} 
        alt={featureSection.image.alt}
        className="rounded-lg object-cover shadow-lg"
      />
    </div>
  </React.Fragment>
);

export default function ClearanceSearchFeatures({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(content.featureSections.length, scrollYProgress);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-16 lg:mb-20">
          <p className="font-heading mb-3 text-lg font-semibold text-cod-gray/80 md:mb-4">
            {content.tagline}
          </p>
          <h2 className="font-heading mb-5 text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
            {content.description}
          </p>
        </div>
        <div ref={containerRef} className="sticky top-0 grid grid-cols-1 gap-6 md:gap-8">
          {content.featureSections.map((featureSection, index) => (
            <FeatureSection 
              key={index} 
              {...featureSection} 
              scale={scales[index]} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
