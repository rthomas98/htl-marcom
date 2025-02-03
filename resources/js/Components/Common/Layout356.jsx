import React from "react";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const FeatureCard = ({ anchor, tagline, heading, description, buttons, image }) => {
  return (
    <div className="px-[5%]">
      <div className="container">
        <a href={anchor.url} className="flex h-16 w-full items-center hover:text-pippin">
          <span className="mr-5 font-sans font-semibold text-cod-gray md:mr-6 md:text-lg">
            {anchor.number}
          </span>
          <h1 className="font-heading font-semibold text-cod-gray md:text-lg">
            {anchor.title}
          </h1>
        </a>
        <div className="py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-sans font-semibold text-cod-gray md:mb-4">{tagline}</p>
              <h2 className="mb-5 font-heading text-4xl font-bold text-cod-gray sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
                {heading}
              </h2>
              <p className="font-sans text-cod-gray/80 md:text-lg">{description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href || '#'}
                    className={`inline-flex items-center justify-center gap-2 ${
                      button.variant === 'link'
                        ? 'text-cod-gray hover:text-pippin transition-colors duration-300'
                        : `rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                            button.variant === 'primary'
                              ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                              : "bg-pippin text-cod-gray hover:bg-pippin-light"
                          }`
                    }`}
                  >
                    {button.title}
                    {button.variant === 'link' && (
                      <ChevronRight className="ml-1 h-5 w-5" />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={image.src}
                className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                alt={image.alt}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Layout356({ features = [] }) {
  return (
    <section>
      <div className="sticky top-0">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="relative -top-32 h-0" id={feature.anchor.url.replace('#', '')} />
            <div
              className={`relative border-t border-gallery bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 ${
                index === 0 
                  ? 'top-0 lg:mb-32' 
                  : index === 1 
                    ? 'lg:top-16 lg:-mt-16 lg:mb-16' 
                    : 'lg:top-32 lg:mb-16'
              }`}
            >
              <FeatureCard {...feature} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
