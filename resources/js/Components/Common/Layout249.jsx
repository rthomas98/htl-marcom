import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";
import clsx from 'clsx';

export const Layout249Defaults = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  sections: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
  buttons: [
    { 
      title: "Start Monitoring", 
      variant: "secondary",
      href: route('contact')
    },
    {
      title: "Learn More",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
      href: route('about-me')
    },
  ],
};

export default function Layout249(props) {
  const { tagline, heading, description, sections, buttons, ...rest } = {
    ...Layout249Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-sans font-semibold text-cod-gray md:mb-4">{tagline}</p>
            <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="font-sans text-cod-gray/80 md:text-lg">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="flex w-full flex-col">
              <div className="mb-6 md:mb-8">
                <img 
                  src={section.image.src} 
                  alt={section.image.alt} 
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <h3 className="mb-5 font-heading text-2xl font-bold text-cod-gray md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p className="font-sans text-cod-gray/80">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          {buttons.map((button, index) => (
            <Link 
              key={index} 
              href={button.href}
              className={clsx(
                "inline-flex items-center justify-center gap-2 px-6 py-3 transition-colors duration-300 rounded-full",
                button.variant === 'secondary' 
                  ? 'border border-cod-gray text-cod-gray hover:bg-pippin' 
                  : button.variant === 'link' 
                    ? 'text-cod-gray hover:text-pippin flex items-center gap-2' 
                    : 'bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray'
              )}
            >
              {button.title}
              {button.iconRight && <span className="ml-1">{button.iconRight}</span>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
