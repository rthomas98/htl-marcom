import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const defaultContent = {
  tagline: "Our Search Process",
  heading: "Comprehensive Trademark Analysis",
  description:
    "Our thorough search process examines federal and state registrations, common law uses, and domain names to identify potential conflicts and assess your trademark's strength. We provide detailed reports and expert recommendations to guide your trademark strategy.",
  buttons: [
    {
      title: "Start Your Search",
      variant: "primary",
      href: "/contact"
    },
  ],
};

export default function ClearanceSearchProcess({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
      style={{
        backgroundImage: 'url("/images/tm/search/shutterstock_566136202.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-cod-gray/80" />
      <div className="container relative z-10 max-w-2xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading mb-3 text-lg font-semibold text-white/90 md:mb-4 md:text-xl"
        >
          {content.tagline}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl"
        >
          {content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-sans text-lg text-white/90 md:text-xl"
        >
          {content.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10"
        >
          {content.buttons.map((button, index) => {
            return (
              <Link
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  button.variant === 'primary'
                    ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                    : "bg-pippin text-cod-gray hover:bg-pippin-light"
                }`}
              >
                {button.title}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
