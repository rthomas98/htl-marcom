import React, { useState, useEffect } from 'react';
import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';

const slideVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Layout423({ 
  tagline = "Tagline",
  heading = "Heading goes here",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  features = [],
  ...rest 
}) {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="px-5 py-12 sm:px-[5%] sm:py-16 md:py-20 lg:py-28" {...rest}>
      <div className="container">
        <div className="mx-auto mb-10 w-full max-w-lg text-center sm:mb-12 md:mb-16 lg:mb-20">
          <p className="mb-3 font-sans font-semibold text-cod-gray md:mb-4">{tagline}</p>
          <h2 className="mb-4 font-heading text-4xl font-bold text-cod-gray sm:text-5xl md:mb-5 md:text-6xl lg:mb-6 lg:text-7xl">
            {heading}
          </h2>
          <p className="font-sans text-sm text-cod-gray/80 sm:text-base md:text-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:flex-row lg:justify-between">
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.url}
              className="group relative flex w-full flex-col overflow-hidden rounded-lg lg:h-full lg:w-1/2"
              initial={false}
              animate={{
                width: hoveredFeatureIdx === index && windowWidth >= 1024 ? '70%' : 
                       windowWidth >= 1024 ? '50%' : '100%'
              }}
              style={{
                width: windowWidth >= 1024 ? 'auto' : '100%',
                maxWidth: windowWidth >= 1024 ? 'none' : '100%'
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }}
              onMouseEnter={() => setHoveredFeatureIdx(index)}
              onMouseLeave={() => setHoveredFeatureIdx(null)}
            >
              <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={false}
                  animate={{
                    opacity: hoveredFeatureIdx === index ? 0.6 : 0.4,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="size-full object-cover"
                  initial={false}
                  animate={{
                    scale: hoveredFeatureIdx === index ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />
              </div>
              <div className="relative flex min-h-[40vh] flex-col justify-end p-4 sm:min-h-[50vh] sm:p-6 md:min-h-[60vh] md:p-8 lg:min-h-[70vh]">
                <div className="z-10">
                  <motion.div
                    initial={false}
                    animate={{
                      y: hoveredFeatureIdx === index ? -10 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <p className="mb-2 font-sans text-sm font-semibold text-white sm:text-base">
                      {feature.tagline}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white sm:text-2xl md:text-3xl md:leading-[1.3] lg:text-4xl">
                      {feature.heading}
                    </h3>
                  </motion.div>
                  
                  {/* Mobile and Tablet Description */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: 'auto',
                      opacity: 1 
                    }}
                    className="mt-4 block lg:hidden"
                  >
                    <p className="font-sans text-sm text-white/90 sm:text-base">
                      {feature.description}
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <Button 
                        variant="link"
                        size="link"
                        iconRight={<ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                            feature.button.variant === 'primary'
                                ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                                : "bg-pippin text-cod-gray hover:bg-pippin-light"
                        }`}
                      >
                        {feature.button.text || 'Learn More'}
                      </Button>
                    </div>
                  </motion.div>

                  {/* Desktop Hover Description */}
                  <AnimatePresence>
                    {hoveredFeatureIdx === index && (
                      <motion.div
                        className="z-10 hidden lg:block lg:w-[340px]"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <p className="mt-5 font-sans text-white/90 md:mt-6">
                          {feature.description}
                        </p>
                        <div className="mt-6 md:mt-8">
                          <Button 
                            variant="link"
                            size="link"
                            iconRight={<ChevronRight className="h-5 w-5" />}
                            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                                feature.button.variant === 'primary'
                                    ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                                    : "bg-pippin text-cod-gray hover:bg-pippin-light"
                            }`}
                          >
                            {feature.button.text || 'Learn More'}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
