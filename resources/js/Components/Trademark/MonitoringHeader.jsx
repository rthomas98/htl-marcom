import React, { useState, useEffect } from "react";
import { Link, router } from '@inertiajs/react';
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import clsx from "clsx";

const carouselContent = [
  {
    heading: "Continuous Brand Protection",
    description: "Stay ahead of potential trademark conflicts with our proactive monitoring services."
  },
  {
    heading: "Digital Brand Surveillance",
    description: "Monitor online marketplaces and social media for unauthorized use of your trademark."
  },
  {
    heading: "Market Analysis & Insights",
    description: "Comprehensive analysis of market trends and potential trademark conflicts."
  }
];

const carouselImages = [
  {
    src: "/images/tm/monitoring/pexels-silverkblack-23496627.jpg",
    alt: "Brand protection and monitoring",
  },
  {
    src: "/images/tm/monitoring/pexels-tatiana-castrillon-191861460-11805157.jpg",
    alt: "Digital trademark monitoring",
  },
  {
    src: "/images/tm/monitoring/pexels-fauxels-3184649.jpg",
    alt: "Market analysis and monitoring",
  },
];

const options = {
  loop: true,
};

export default function MonitoringHeader({ className = "", ...props }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const content = {
    heading: "Protect Your Brand with Active Monitoring",
    description:
      "Comprehensive trademark monitoring services to detect potential infringement and protect your intellectual property rights.",
    buttons: [
      { 
        title: "Start Monitoring",
        variant: "primary",
        href: route('contact'),
        className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300"
      },
      { 
        title: "Learn More",
        variant: "secondary",
        href: route('about-me'),
        className: "border border-cod-gray bg-transparent text-cod-gray hover:bg-cod-gray hover:text-white transition-all duration-300"
      }
    ],
    carouselHeading: "Continuous Brand Protection",
    carouselDescription: "Stay ahead of potential trademark conflicts with our proactive monitoring services.",
    ...props
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="grid grid-cols-1 items-center gap-y-16 overflow-hidden bg-white pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mx-[5%] max-w-md justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end"
      >
        <h1 className="font-heading mb-5 text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
          {content.heading}
        </h1>
        <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
          {content.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
          {content.buttons.map((button, index) => (
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
          ))}
        </div>
      </motion.div>

      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-[#f5f5f5] text-center">
        <Carousel
          opts={options}
          setApi={setApi}
          className="relative left-0 right-0 z-10 block h-full overflow-hidden whitespace-nowrap pl-4"
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative inline-block size-full whitespace-normal text-left align-top">
                  <div className="flex h-screen flex-col">
                    <div className="relative flex-1">
                      <img
                        className="absolute size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                    <div className="relative bg-white px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                      <div className="w-full max-w-lg">
                        <h6 className="font-heading mb-1 text-lg font-bold leading-[1.4] text-cod-gray md:text-xl">
                          {carouselContent[index].heading}
                        </h6>
                        <p className="font-sans text-cod-gray/80">
                          {carouselContent[index].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute bottom-[52px] left-8 right-auto top-auto flex w-full items-start justify-start">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full transition-colors duration-300", {
                    "bg-cod-gray": current === index + 1,
                    "bg-cod-gray/20": current !== index + 1,
                  })}
                />
              ))}
            </div>
            <CarouselPrevious className="bottom-2 left-auto right-[5.5rem] top-auto size-12 bg-transparent text-cod-gray hover:text-pippin md:right-24" />
            <CarouselNext className="bottom-2 left-auto right-8 top-auto size-12 bg-transparent text-cod-gray hover:text-pippin" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
