import React from 'react';
import { Link } from '@inertiajs/react';
import { RxPlus } from "react-icons/rx";

const Faq4Defaults = {
  heading: "Common Questions",
  description:
    "Find answers to frequently asked questions about our General Counsel services and how we can support your business.",
  questions: [
    {
      title: "What services are included in your General Counsel package?",
      answer:
        "Our General Counsel services include contract review and negotiation, regulatory compliance guidance, risk management, employment law advice, dispute resolution, and strategic legal planning. We tailor our services to meet your specific business needs.",
    },
    {
      title: "How does external General Counsel differ from in-house counsel?",
      answer:
        "External General Counsel provides the same comprehensive legal support as in-house counsel but without the overhead costs. You get access to experienced attorneys when you need them, making it a cost-effective solution for growing businesses.",
    },
    {
      title: "What are your pricing options?",
      answer:
        "We offer flexible pricing models including monthly retainers, project-based fees, and hourly rates. Our packages can be customized based on your business size and legal needs. Contact us for a detailed pricing discussion.",
    },
    {
      title: "How quickly can you respond to legal issues?",
      answer:
        "We prioritize responsiveness and typically respond to urgent matters within hours. For routine matters, we maintain a 24-48 hour response time. Emergency contact options are available for critical situations.",
    },
    {
      title: "Can you help with industry-specific regulations?",
      answer:
        "Yes, we have experience across multiple industries and their specific regulatory requirements. We stay current with industry regulations and can help ensure your business maintains compliance while achieving its objectives.",
    },
  ],
  footerHeading: "Need More Information?",
  footerDescription: "Schedule a consultation to discuss your specific legal needs and how we can support your business.",
  button: {
    title: "Schedule Consultation",
    href: "/contact"
  },
};

export const Faq4 = ({ className, ...props }) => {
  const { heading, description, questions, footerHeading, footerDescription, button } = {
    ...Faq4Defaults,
    ...props,
  };
  
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 bg-cod-gray ${className || ''}`}>
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 font-heading text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-300 md:text-xl">{description}</p>
        </div>
        <div className="grid items-start justify-stretch gap-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="border border-white/10 bg-cod-gray-light px-5 md:px-6"
            >
              <button
                className="flex w-full items-center justify-between py-5 text-left text-white hover:text-gray-300"
                onClick={() => {
                  const content = document.getElementById(`faq-${index}`);
                  const icon = document.getElementById(`icon-${index}`);
                  if (content.style.display === 'none') {
                    content.style.display = 'block';
                    icon.style.transform = 'rotate(45deg)';
                  } else {
                    content.style.display = 'none';
                    icon.style.transform = 'rotate(0deg)';
                  }
                }}
              >
                <span className="font-semibold">{question.title}</span>
                <RxPlus
                  id={`icon-${index}`}
                  className="size-7 shrink-0 text-white transition-transform duration-300 md:size-8"
                />
              </button>
              <div
                id={`faq-${index}`}
                className="hidden pb-6 text-gray-300"
                style={{ display: 'none' }}
              >
                {question.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 font-heading text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="text-lg text-gray-300 md:text-xl">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Link
              href={button.href}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-pippin text-cod-gray hover:bg-white hover:text-cod-gray transition-colors duration-300"
            >
              {button.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
