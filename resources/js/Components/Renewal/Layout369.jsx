import React from "react";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function Layout369({
  tagline = "Trademark Maintenance",
  heading = "Protect Your Brand's Future",
  description = "Comprehensive trademark renewal and maintenance services to keep your intellectual property secure.",
  cardsSmall = [],
  cardBig = {},
  ...rest
}) {
  return (
    <section className="bg-pippin px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <motion.div 
          className="mb-8 md:mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-2 font-heading text-sm font-semibold text-cod-gray/80 md:mb-4">{tagline}</p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-cod-gray md:mb-6 md:text-6xl lg:text-7xl">{heading}</h2>
            <p className="font-sans text-sm text-cod-gray/80 md:text-lg">{description}</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4">
            <motion.div 
              className="grid grid-cols-1 overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-sm transition-shadow hover:shadow-md md:grid-cols-2 lg:col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-1 flex-col justify-center p-4 sm:p-6">
                <div>
                  <p className="mb-2 font-heading text-sm font-semibold text-cod-gray/80">{cardBig.tagline}</p>
                  <h3 className="mb-2 font-heading text-lg font-bold text-cod-gray sm:text-xl md:text-2xl">{cardBig.heading}</h3>
                  <p className="text-sm text-cod-gray/80 sm:text-base">{cardBig.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-6">
                  {cardBig.buttons?.map((button, index) => (
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
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="h-48 md:h-full">
                <img
                  src={cardBig.image?.src}
                  alt={cardBig.image?.alt}
                  className="h-full w-full object-cover md:rounded-r-lg"
                />
              </div>
            </motion.div>
            {cardsSmall.map((card, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-sm transition-shadow hover:shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex flex-1 flex-col justify-center p-4 sm:p-6">
                  <div>
                    <p className="mb-2 font-heading text-sm font-semibold text-cod-gray/80">{card.tagline}</p>
                    <h3 className="mb-2 font-heading text-lg font-bold text-cod-gray sm:text-xl md:text-2xl">{card.heading}</h3>
                    <p className="text-sm text-cod-gray/80 sm:text-base">{card.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-6">
                    <Link
                      href={card.button.href}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                        card.button.variant === 'primary'
                          ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                          : "bg-pippin text-cod-gray hover:bg-pippin-light"
                      }`}
                    >
                      {card.button.title}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="h-48 sm:aspect-square sm:h-auto">
                  <img 
                    src={card.image.src} 
                    alt={card.image.alt} 
                    className="h-full w-full object-cover" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
