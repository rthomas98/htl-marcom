import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { Link } from '@inertiajs/react';

export const Faq3 = ({ className, ...props }) => {
  const { heading, description, button, questions } = {
    ...Faq3Defaults,
    ...props,
  };
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 bg-white ${className || ''}`}>
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-5xl font-bold whitespace-pre-line md:mb-6 md:text-7xl lg:text-8xl text-cod-gray">
            {heading}
          </h2>
          <p className="text-cod-gray/90 md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link 
              href={button.href}
              className={`inline-flex items-center justify-center rounded-full ${
                button.variant === 'primary' 
                  ? 'bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-dark'
                  : 'bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light'
              }`}
            >
              {button.title}
            </Link>
          </div>
        </div>
        <Accordion type="multiple" className="text-cod-gray">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-cod-gray/20">
              <AccordionTrigger className="md:py-5 md:text-md text-cod-gray hover:text-pippin">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-cod-gray/90">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq3Defaults = {
  heading: "Estate Planning\nFAQs",
  description:
    "Find answers to common questions about estate planning, tax implications, guardianship, and wealth transfer strategies.",
  button: {
    title: "Schedule Consultation",
    variant: "secondary",
    href: "",
  },
  questions: [
    {
      title: "What is estate planning and why do I need it?",
      answer: "Estate planning is the process of arranging for the management and distribution of your assets during life and after death. It's essential because it ensures your wishes are carried out, minimizes taxes and legal fees, protects your beneficiaries, and can help avoid family disputes.",
    },
    {
      title: "When should I start planning my estate?",
      answer: "The best time to start estate planning is now, regardless of your age or wealth level. Life circumstances can change unexpectedly, and having a plan in place ensures your assets and loved ones are protected. It's especially important if you have children, own property, or have specific wishes for your healthcare decisions.",
    },
    {
      title: "What happens if I die without an estate plan?",
      answer: "If you die without an estate plan (intestate), your assets will be distributed according to state law, which may not align with your wishes. This can lead to lengthy probate proceedings, increased costs, and potential family conflicts. Additionally, the court will decide guardianship of minor children without your input.",
    },
    {
      title: "How often should I update my estate plan?",
      answer: "You should review your estate plan every 3-5 years or whenever significant life changes occur, such as marriage, divorce, birth of children, death of beneficiaries, major asset acquisitions or sales, or changes in tax laws. Regular reviews ensure your plan remains current and effective.",
    },
    {
      title: "What's the difference between a will and a trust?",
      answer: "A will is a legal document that takes effect after death and specifies how your assets should be distributed. A trust, on the other hand, can take effect during your lifetime and can provide more control over asset distribution, potentially avoid probate, and offer tax benefits. Both can be valuable tools in your estate plan.",
    },
  ],
};
