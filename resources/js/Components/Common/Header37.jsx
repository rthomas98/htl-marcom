import React from 'react';
import { Link } from '@inertiajs/react';

export const Header37Defaults = {
  heading: "External General\nCounsel Services",
  description:
    "Expert legal guidance when you need it. Our General Counsel services provide your business with on-demand access to experienced attorneys without the overhead of a full-time legal department.",
  buttons: [
    { 
      title: "Schedule Consultation",
      href: route('contact'),
    },
    { 
      title: "Learn More",
      href: route('about-me'),
    }
  ],
  image: {
    src: "/images/other/general-counsel/shutterstock_2024994188.jpg",
    alt: "General Counsel Services",
  },
};

export const Header37 = ({ className, ...props }) => {
  const { heading, description, buttons, image } = {
    ...Header37Defaults,
    ...props,
  };
  
  return (
    <section className={`grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 ${className || ''}`}>
      <div className="order-2 lg:order-1">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
      <div className="order-1 mx-[5%] sm:max-w-md md:justify-self-start lg:order-2 lg:ml-20 lg:mr-[5vw]">
        <h1 className="mb-5 font-heading text-5xl font-bold text-cod-gray whitespace-pre-line md:mb-6 md:text-7xl lg:text-8xl">
          {heading}
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={index === 0 
                ? "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
                : "inline-flex items-center justify-center rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm hover:bg-pippin-light"
              }
            >
              {button.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
