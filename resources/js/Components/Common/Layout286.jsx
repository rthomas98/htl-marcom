import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";
import { Shield, FileCheck, Bell, UserCheck } from 'lucide-react';

const Layout286Defaults = {
  sections: [
    {
      heading: "Consumer Rights",
      description:
        "Texas consumers gain rights to access, correct, delete, and port their personal data, with businesses required to honor these requests within specified timeframes.",
      icon: <UserCheck className="size-6 text-white" strokeWidth={1.5} />,
    },
    {
      heading: "Business Obligations",
      description:
        "Companies must implement privacy policies, obtain consent for data processing, and maintain reasonable security practices to protect consumer information.",
      icon: <FileCheck className="size-6 text-white" strokeWidth={1.5} />,
    },
    {
      heading: "Data Protection",
      description:
        "Enhanced security measures required for sensitive data, with strict protocols for data handling, storage, and transfer to ensure consumer privacy.",
      icon: <Shield className="size-6 text-white" strokeWidth={1.5} />,
    },
    {
      heading: "Breach Notification",
      description:
        "Mandatory notification requirements for data breaches, with specific timelines and procedures for informing affected consumers and regulatory authorities.",
      icon: <Bell className="size-6 text-white" strokeWidth={1.5} />,
    },
  ],
  tagline: "Texas Data Privacy and Security Act",
  heading: "New Privacy Requirements for 2024",
  description:
    "Starting July 1, 2024, businesses operating in Texas must comply with comprehensive new data privacy regulations. Our team helps you understand and implement these requirements effectively.",
  video: "/videos/data-privacy.mp4",
  videoType: "video/mp4",
  buttons: [
    { 
      title: "Schedule Consultation",
      href: "/contact",
      className: "rounded-full bg-white px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-cod-gray-lightest"
    },
    {
      title: "Learn More",
      href: "#services",
      className: "rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:text-pippin flex items-center",
      icon: <RxChevronRight className="ml-2" />
    },
  ],
};

export const Layout286 = ({ className, ...props }) => {
  const { sections, tagline, heading, description, buttons, video, videoType } = {
    ...Layout286Defaults,
    ...props,
  };
  
  return (
    <section className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container relative z-10">
        <div className="grid auto-cols-fr grid-cols-1 place-items-start gap-12 md:grid-cols-[0.5fr_1fr] md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">{tagline}</p>
            <h2 className="mb-5 font-heading text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-white md:text-lg">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={button.className}
                >
                  {button.title}
                  {button.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index}>
                <div className="mb-5 md:mb-6">
                  {section.icon}
                </div>
                <h3 className="mb-5 font-heading text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-white/90">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted playsInline>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};
