import React, { useEffect, useState } from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { Link } from '@inertiajs/react';

const benefitsContent = [
  {
    tagline: "Brand Protection",
    heading: "Secure Your Exclusive Rights",
    description:
      "Federal trademark registration grants you exclusive rights to use your mark nationwide, preventing others from using similar marks that could confuse consumers.",
    buttons: [
      { 
        title: "Ready To Get Started?", 
        variant: "secondary",
        className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300 rounded-full",
        href: "/contact"
      },
    ],
    image: {
      src: "/images/tm/renewal/shutterstock_2157348673.jpg",
      alt: "Legal professional reviewing documents",
    },
  },
  {
    tagline: "Legal Strength",
    heading: "Enhanced Legal Protection",
    description:
      "Registration provides strong legal presumption of ownership, making it easier to enforce your rights and defend against infringement in federal courts.",
    buttons: [
      { 
        title: "Protect Your Brand", 
        variant: "secondary",
        className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300 rounded-full",
        href: "/contact"
      },
      
    ],
    image: {
      src: "/images/tm/renewal/shutterstock_2258486971.jpg",
      alt: "Legal documents and trademark papers",
    },
  },
  {
    tagline: "Business Growth",
    heading: "Expand With Confidence",
    description:
      "A registered trademark becomes a valuable business asset, enabling nationwide expansion, licensing opportunities, and increased brand value.",
    buttons: [
      { 
        title: "Start Registration", 
        variant: "secondary",
        className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300 rounded-full",
        href: "/contact"
      },
      
    ],
    image: {
      src: "/images/tm/renewal/shutterstock_2282908015.jpg",
      alt: "Business growth and success",
    },
  },
];

export default function RegistrationBenefits({ className = "", ...props }) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection % benefitsContent.length);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-12 md:block">
            {benefitsContent.map((content, index) => (
              <div key={index}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="font-heading mb-3 font-semibold text-cod-gray/80 md:mb-4">
                    {content.tagline}
                  </p>
                  <h2 className="font-heading mb-5 text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                    {content.heading}
                  </h2>
                  <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
                    {content.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {content.buttons.map((button, index) => {
                      const { href, ...buttonProps } = button;
                      return (
                        <Link key={index} href={href}>
                          <Button 
                            {...buttonProps}
                            className={buttonProps.className}
                          >
                            {button.title}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img 
                      src={content.image.src} 
                      className="w-full rounded-lg object-cover" 
                      alt={content.image.alt} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {benefitsContent.map((content, index) => (
              <img
                key={index}
                src={content.image.src}
                className={clsx("absolute w-full rounded-lg object-cover transition-opacity duration-500", {
                  "opacity-100": activeSection === index,
                  "opacity-0": activeSection !== index,
                })}
                alt={content.image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
