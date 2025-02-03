import React from 'react';
import { Briefcase, Scale, Shield, FileText } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout102 = (props) => {
  const { heading, description, image, subHeadings, className = '' } = {
    ...Layout102Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-12 grid grid-cols-1 items-start justify-between gap-x-8 gap-y-5 md:mb-16 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-cod-gray md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>
          <div>
            <p className="mb-6 font-sans text-base sm:text-lg text-cod-gray-light md:mb-8">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index} className="group">
                  <div className="mb-3 text-pippin-darker transition-colors duration-300 group-hover:text-pippin-darkest md:mb-4">
                    <subHeading.icon className="size-8" />
                  </div>
                  <h6 className="mb-3 font-heading text-lg font-bold text-cod-gray leading-snug md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="font-sans text-cod-gray-light">
                    {subHeading.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg shadow-lg">
          <img 
            src={image.src} 
            className="h-full w-full object-cover" 
            alt={image.alt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export const Layout102Defaults = {
  heading: "Dedicated Legal Support for Your Business",
  description: "Our General Counsel services provide ongoing legal support to help your business navigate complex legal landscapes, manage risks, and make informed decisions. We serve as your trusted legal partner, offering proactive guidance and strategic solutions.",
  image: {
    src: '/images/other/overview/shutterstock_1613072758.jpg',
    alt: "General Counsel Services - Hebert-Thomas Law",
  },
  subHeadings: [
    {
      icon: Briefcase,
      title: "Strategic Guidance",
      description: "Ongoing legal advice for business operations, growth strategies, and risk management.",
    },
    {
      icon: FileText,
      title: "Contract Review",
      description: "Thorough review and negotiation of business agreements and commercial contracts.",
    },
    {
      icon: Scale,
      title: "Compliance Support",
      description: "Ensuring adherence to regulatory requirements and industry standards.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of legal risks to protect your business interests.",
    },
  ],
};
