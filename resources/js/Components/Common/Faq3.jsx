import React from 'react';
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

export const Faq3 = (props) => {
  const { heading, description, button, questions, className = '' } = {
    ...Faq3Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
          <div>
            <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light">{description}</p>
            <div className="mt-6 md:mt-8">
              <Button 
                {...button}
                className="rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
              >
                {button.title}
              </Button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Accordion type="multiple" className="space-y-4">
              {questions.map((question, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-lg border border-gallery bg-white px-4 sm:px-6"
                >
                  <AccordionTrigger className="py-4 sm:py-5 font-heading text-base sm:text-lg font-semibold text-cod-gray">
                    {question.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-6 font-sans text-sm sm:text-base text-cod-gray-light">
                    {question.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq3Defaults = {
  heading: "Common Questions",
  description: "Common questions and answers about Trademark Licensing Agreements, including how the process works, what to expect, and how it benefits your business.",
  button: {
    title: "Schedule Consultation",
    variant: "primary",
  },
  questions: [
    {
      title: "What is a Trademark Licensing Agreement?",
      answer: "A Trademark Licensing Agreement is a legal contract that allows a third party (licensee) to use your trademark under specific terms and conditions. It outlines the scope of use, quality standards, compensation, and duration of the license.",
    },
    {
      title: "Why do I need a Trademark Licensing Agreement?",
      answer: "A licensing agreement helps you expand your brand's reach and create new revenue streams while maintaining control over your trademark. It protects your intellectual property rights and ensures consistent brand representation across different products or services.",
    },
    {
      title: "What should be included in a Trademark Licensing Agreement?",
      answer: "Key elements include the scope of rights granted, territory restrictions, quality control measures, royalty terms, duration, termination conditions, and dispute resolution procedures. We ensure all critical aspects are covered to protect your interests.",
    },
    {
      title: "How do you ensure quality control in licensing agreements?",
      answer: "We incorporate specific quality standards, inspection rights, and approval processes in the agreement. This helps maintain your brand's reputation and ensures licensees meet your established standards.",
    },
    {
      title: "What happens if a licensee violates the agreement?",
      answer: "The agreement includes enforcement provisions and remedies for violations. We can help you monitor compliance and take appropriate legal action if needed, including termination of the license and seeking damages.",
    },
  ],
};
