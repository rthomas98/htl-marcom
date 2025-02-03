import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Layout367Defaults = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  card: {
    tagline: "Tagline",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: "Relume placeholder image",
    },
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [
      { 
        title: "Start Monitoring", 
        variant: "primary",
        href: route('contact')
      },
      {
        title: "View Monitoring Plans",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
        href: route('trademark-services.overview')
      },
    ],
  },
  sections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        { 
          title: "Request Monitoring", 
          variant: "primary",
          href: route('contact')
        },
        {
          title: "Monitoring Coverage",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
          href: route('trademark-services.overview')
        },
      ],
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        { 
          title: "Get Protected Now", 
          variant: "primary",
          href: route('contact')
        },
        {
          title: "Protection Details",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
          href: route('trademark-services.overview')
        },
      ],
    },
  ],
};

export default function Layout367(props) {
  const { tagline, heading, description, card, sections, ...rest } = {
    ...Layout367Defaults,
    ...props,
  };

  return (
    <section id="relume" className="bg-mine-shaft px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-18 lg:mb-20"
        >
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-sans font-semibold text-white md:mb-4">{tagline}</p>
            <h2 className="mb-5 font-heading text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="font-sans text-white/80 md:text-lg">{description}</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                  <div>
                    <div className="mb-5 md:mb-6">
                      {typeof section.icon.src === 'string' ? 
                        <img src={section.icon.src} className="size-12" alt={section.icon.alt} /> :
                        section.icon.src
                      }
                    </div>
                    <h3 className="mb-5 font-heading text-4xl font-bold leading-[1.2] text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                      {section.heading}
                    </h3>
                    <p className="font-sans text-cod-gray/80">{section.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {section.buttons.map((button, index) => (
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
                        {button.iconRight && <span className="ml-1">{button.iconRight}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 md:row-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
            >
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-sans text-sm font-semibold text-cod-gray">{card.tagline}</p>
                  <h3 className="mb-5 font-heading text-4xl font-bold leading-[1.2] text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                    {card.heading}
                  </h3>
                  <p className="font-sans text-cod-gray/80">{card.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {card.buttons.map((button, index) => (
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
                      {button.iconRight && <span className="ml-1">{button.iconRight}</span>}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={card.image.src} 
                  alt={card.image.alt} 
                  className="w-full rounded-b-lg object-cover" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
