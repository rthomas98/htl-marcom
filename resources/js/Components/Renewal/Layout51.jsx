import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from '@inertiajs/react';

export default function Layout51({
  heading = "Protect Your Brand's Future",
  description = "Ensure your trademark rights remain protected with our comprehensive renewal services. Our experienced team handles all aspects of the renewal process.",
  subHeadings = [],
  tagline = "Why Choose Us",
  buttons = [],
  video = "",
  videoType = "video/mp4",
  ...rest
}) {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container relative z-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-heading text-sm font-semibold text-white md:mb-4">{tagline}</p>
            <h2 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              {heading}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 font-sans text-white/90 md:mb-8 md:text-lg">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
              {subHeadings.map((subHeading, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <h6 className="mb-3 font-heading text-lg font-bold leading-snug text-white md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="font-sans text-sm text-white/80 md:text-base">
                    {subHeading.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {buttons.map((button, index) => (
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
                  {button.variant === 'link-alt' && <ChevronRight className="ml-2 h-4 w-4" />}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-cod-gray/80" />
      {video && (
        <div className="absolute inset-0 z-0">
          <video 
            className="h-full w-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={video} type={videoType} />
          </video>
        </div>
      )}
    </section>
  );
}
