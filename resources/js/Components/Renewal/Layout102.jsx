import React from "react";
import { motion } from "framer-motion";

export default function Layout102({
  heading = "Trademark Renewal Process",
  description = "Our comprehensive trademark renewal service ensures your intellectual property rights remain protected. We handle all aspects of the renewal process, from timely filing to addressing office actions.",
  image = {
    src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    alt: "Trademark renewal process documentation",
  },
  subHeadings = [],
  ...rest
}) {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-3xl font-bold leading-tight text-cod-gray md:text-4xl lg:text-5xl">
              {heading}
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 font-sans text-cod-gray/80 md:mb-8 md:text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="mb-3 md:mb-4">
                    <img 
                      src={subHeading.icon.src} 
                      className="size-12 rounded-lg object-cover" 
                      alt={subHeading.icon.alt} 
                    />
                  </div>
                  <h6 className="mb-3 font-heading text-lg font-bold leading-snug text-cod-gray md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="font-sans text-sm text-cod-gray/80 md:text-base">
                    {subHeading.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="aspect-video w-full overflow-hidden rounded-lg"
        >
          <img 
            src={image.src} 
            className="h-full w-full object-cover" 
            alt={image.alt} 
          />
        </motion.div>
      </div>
    </section>
  );
}
