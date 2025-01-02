import React from 'react';
import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";
import { Plus } from 'lucide-react';

export const Faq5 = (props) => {
  const { heading, description, questions, footerHeading, footerDescription, button, className = '' } = {
    ...Faq5Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-12 max-w-3xl md:mb-16 lg:mb-20">
          <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="font-sans text-base sm:text-lg text-cod-gray-light">
            {description}
          </p>
        </div>
        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-lg border border-gallery bg-white px-5 transition-colors duration-300 hover:border-pippin md:px-6"
            >
              <AccordionTrigger
                icon={
                  <Plus className="size-6 shrink-0 text-cod-gray transition-transform duration-300 md:size-7" />
                }
                className="py-4 font-heading text-base font-semibold text-cod-gray sm:text-lg md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4 font-sans text-cod-gray-light md:pb-6">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <h4 className="mb-3 font-heading text-xl font-bold text-cod-gray sm:text-2xl md:mb-4 md:text-3xl">
            {footerHeading}
          </h4>
          <p className="mb-6 font-sans text-cod-gray-light md:mb-8">
            {footerDescription}
          </p>
          <Button 
            {...button}
            className="rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
          >
            {button.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export const Faq5Defaults = {
  heading: "Frequently Asked Questions",
  description: "Find answers to common questions about international trademark registration, the Madrid Protocol, and our comprehensive trademark services.",
  questions: [
    {
      title: "What is the Madrid Protocol and how does it benefit my business?",
      answer: "The Madrid Protocol is an international trademark system that allows you to file a single application to protect your trademark in multiple countries. Benefits include: simplified filing process, cost savings through a single application, centralized management of your trademark portfolio, and easier expansion of protection to new countries as your business grows.",
    },
    {
      title: "How long does international trademark registration take?",
      answer: "The timeline for international trademark registration varies by jurisdiction. Through the Madrid Protocol, WIPO typically processes applications within 12-18 months. However, individual countries may take additional time to examine and approve the registration. We'll provide specific timelines based on your target jurisdictions and help manage the process efficiently.",
    },
    {
      title: "What countries are covered by the Madrid Protocol?",
      answer: "The Madrid Protocol currently covers over 120 countries, including major markets like the United States, European Union, United Kingdom, Japan, and China. We can help determine if your target markets are covered and recommend the most effective registration strategy for your business needs.",
    },
    {
      title: "What happens if my trademark application is rejected in certain countries?",
      answer: "If your trademark application faces rejection in specific countries, we'll work with you to: analyze the grounds for rejection, prepare and file responses to office actions, modify the application if necessary, or explore alternative protection strategies. Our experienced team handles all aspects of the appeal process to maximize your chances of success.",
    },
    {
      title: "How do you handle trademark monitoring and enforcement internationally?",
      answer: "We provide comprehensive international trademark monitoring and enforcement services, including: regular surveillance of trademark registers, monitoring of market usage, detection of potential infringements, cease and desist communications, and coordination with local counsel for enforcement actions when necessary.",
    },
    {
      title: "What are the costs involved in international trademark registration?",
      answer: "Costs vary depending on factors such as: number of target countries, classes of goods/services, and specific filing requirements. The Madrid Protocol often provides cost savings compared to direct national filings. We'll provide detailed cost estimates and help you develop a registration strategy that fits your budget and business objectives.",
    },
    {
      title: "Do I need local representatives in each country?",
      answer: "While the Madrid Protocol doesn't always require local representatives, some countries may require local agents for specific procedures or communications. We maintain a network of trusted local counsel worldwide and can coordinate all necessary local representation to ensure proper handling of your trademark matters.",
    },
  ],
  footerHeading: "Need More Information?",
  footerDescription: "Contact our international trademark team for personalized guidance on protecting your brand globally.",
  button: {
    title: "Schedule Consultation",
    variant: "primary",
  },
};
