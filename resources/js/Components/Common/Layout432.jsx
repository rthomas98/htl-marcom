import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";

export const Layout432Defaults = {
  tagline: "Our Services",
  heading: "Your External\nLegal Department",
  description:
    "Partner with us for comprehensive legal support that scales with your business. Our General Counsel services cover everything from day-to-day legal matters to strategic planning and risk management. We provide expert guidance in contract review, employment law, regulatory compliance, and dispute resolution, ensuring your business interests are always protected.",
  buttons: [
    { 
      title: "View Services", 
      href: route('legal-services.overview'),
      className: "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
    },
    {
      title: "Contact Us",
      href: route('contact'),
      className: "inline-flex items-center justify-center rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm hover:bg-pippin-light"
    },
  ],
  firstImage: {
    src: "/images/other/general-counsel/shutterstock_2237655605.jpg",
    alt: "Legal Strategy Meeting",
  },
  secondImage: {
    src: "/images/other/general-counsel/shutterstock_2424449997.jpg",
    alt: "Contract Review",
  },
  thirdImage: {
    src: "/images/other/general-counsel/shutterstock_2500602907.jpg",
    alt: "Risk Management",
  },
};

export const Layout432 = ({ className, ...props }) => {
  const { tagline, heading, description, buttons, firstImage, secondImage, thirdImage } = {
    ...Layout432Defaults,
    ...props,
  };

  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 bg-white ${className || ''}`}>
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-cod-gray md:mb-4">{tagline}</p>
            <h2 className="mb-12 font-heading text-5xl font-bold text-cod-gray whitespace-pre-line md:mb-18 md:text-7xl lg:mb-20 lg:text-8xl">
              {heading}
            </h2>
            <img
              src={firstImage.src}
              className="aspect-square w-full object-cover rounded-lg"
              alt={firstImage.alt}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-12 grid grid-cols-2 gap-6 sm:gap-8 md:mb-18 lg:mb-20">
              <img
                src={secondImage.src}
                className="mt-[50%] w-full object-cover rounded-lg"
                alt={secondImage.alt}
              />
              <img
                src={thirdImage.src}
                className="mt-[25%] w-full object-cover rounded-lg"
                alt={thirdImage.alt}
              />
            </div>
            <div className="ml-[5%] mr-[10%]">
              <p className="text-lg text-gray-600 md:text-xl">{description}</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={button.className}
                  >
                    {button.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
