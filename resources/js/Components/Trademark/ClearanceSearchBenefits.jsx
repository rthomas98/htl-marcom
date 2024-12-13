import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from "clsx";

const defaultContent = {
  tagline: "Why Choose Our Service",
  heading: "Comprehensive Protection for Your Brand",
  description:
    "Our trademark clearance search service goes beyond basic database checks. We provide thorough analysis and strategic guidance to ensure your brand's long-term protection and success in the marketplace.",
  buttons: [
    { 
      title: "Schedule Consultation", 
      variant: "secondary",
      className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white"
    },
    { 
      title: "View Sample Report", 
      variant: "link", 
      size: "link",
      className: "text-cod-gray hover:text-cod-gray/80",
      iconRight: <ChevronRight className="size-4" />
    },
  ],
  features: [
    {
      image: {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        alt: "Comprehensive database analysis",
      },
      heading: "Thorough Database Analysis",
      description:
        "We utilize advanced search tools and databases to conduct comprehensive searches across federal, state, and common law sources. This thorough approach helps identify potential conflicts early in the process.",
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
        alt: "Expert legal analysis",
      },
      heading: "Expert Legal Analysis",
      description:
        "Our experienced trademark attorneys analyze search results to assess risks and provide strategic recommendations. We help you understand the strength of your mark and potential obstacles to registration.",
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80",
        alt: "Strategic guidance",
      },
      heading: "Strategic Guidance",
      description:
        "Beyond just identifying conflicts, we provide strategic guidance on trademark selection, use, and protection. Our recommendations help you make informed decisions about your intellectual property strategy.",
    },
  ],
};

export default function ClearanceSearchBenefits({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-16 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex h-full flex-col"
          >
            <p className="font-heading mb-3 text-lg font-semibold text-cod-gray/80 md:mb-4">
              {content.tagline}
            </p>
            <h2 className="font-heading text-4xl font-bold text-cod-gray md:text-5xl lg:text-6xl">
              {content.heading}
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-[7.5%] flex flex-col justify-end md:mt-40"
          >
            <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
              {content.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {content.buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`${button.className} transition-colors duration-300`}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={clsx("w-full", {
                "md:mt-[25%]": index === 1,
                "md:mt-[50%]": index === 2,
              })}
            >
              <div className="mb-6 w-full overflow-hidden rounded-lg md:mb-8">
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="font-heading mb-3 text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {feature.heading}
              </h3>
              <p className="font-sans text-cod-gray/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
