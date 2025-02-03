import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight, Building2, FileText, Scale, Shield } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout10 = (props) => {
  const { tagline, heading, description, buttons, image, subHeadings, className = '' } = {
    ...Layout10Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4">
              {tagline}
            </p>
            <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
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
            <div className="mt-8 flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center rounded-full ${
                    button.variant === 'primary'
                      ? 'bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-dark'
                      : 'bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light'
                  }`}
                >
                  {button.title}
                  {button.icon && <button.icon className="ml-2 size-5" />}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              className="h-full w-full object-cover" 
              alt={image.alt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout10Defaults = {
  tagline: "Business Law Services",
  heading: "Comprehensive Legal Solutions for Texas Businesses",
  description: "Our business law services are designed to support companies at every stage of their journey, from formation to expansion and beyond. We provide strategic legal guidance to help your business thrive while ensuring compliance and minimizing risk.",
  subHeadings: [
    {
      icon: Building2,
      title: "Entity Formation",
      description: "Expert guidance on business structure selection and formation, including corporations, LLCs, and partnerships.",
    },
    {
      icon: FileText,
      title: "Contract Management",
      description: "Drafting, review, and negotiation of business contracts, agreements, and commercial transactions.",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Ensuring your business meets all state and federal regulations while maintaining operational efficiency.",
    },
    {
      icon: Shield,
      title: "Dispute Resolution",
      description: "Strategic representation in business disputes, litigation, and alternative dispute resolution.",
    },
  ],
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: route('contact'),
    },
    {
      title: "Learn More",
      variant: "link",
      href: route('trademark-services.overview'),
      icon: ChevronRight,
    }
  ],
  image: {
    src: "/images/tm/licensing/pexels-yankrukov-8837376.jpg",
    alt: "Business Law Services - Hebert-Thomas Law",
  },
};
