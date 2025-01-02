import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, FileCheck, Shield, Scale } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout10 = (props) => {
  const { tagline, heading, description, buttons, image, subHeadings, className = '' } = {
    ...Layout10Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-pippin-darker md:mb-4">{tagline}</p>
            <h1 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="mb-6 font-sans text-cod-gray-light md:mb-8 md:text-lg">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <div className="mb-3 text-pippin-darker md:mb-4">
                    {subHeading.icon}
                  </div>
                  <h6 className="mb-3 font-heading text-lg font-bold leading-[1.4] text-cod-gray md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="text-cod-gray-light">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                  {button.iconRight && <ChevronRight className="ml-2 size-5" />}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout10Defaults = {
  tagline: "Expert Legal Services",
  heading: "Drafting Licensing Agreements",
  description: "We meticulously draft licensing agreements tailored to your business needs, ensuring all legal aspects are covered.",
  subHeadings: [
    {
      icon: <FileCheck className="size-12" />,
      title: "Comprehensive Coverage",
      description: "Our agreements cover all essential aspects including royalties, quality control, territory rights, and term conditions.",
    },
    {
      icon: <Shield className="size-12" />,
      title: "Brand Protection",
      description: "We include robust provisions to protect your trademark's integrity and maintain brand value throughout the licensing term.",
    },
  ],
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      className: "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
    },
    {
      title: "Learn More",
      variant: "link",
      size: "link",
      iconRight: true,
      className: "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light"
    },
  ],
  image: {
    src: placeholderImage,
    alt: "Trademark Licensing Agreement Drafting",
  },
};
