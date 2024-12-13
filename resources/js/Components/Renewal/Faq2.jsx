import React from 'react';
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

export default function Faq2({ className, ...props }) {
  const { heading, description, questions, footerHeading, footerDescription, button } = {
    ...Faq2Defaults,
    ...props,
  };
  
  return (
    <section id="faq" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">{question.title}</AccordionTrigger>
              <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Faq2Defaults = {
  heading: "Frequently Asked Questions",
  description: "Find answers to common questions about trademark renewal and maintenance.",
  questions: [
    {
      title: "When do I need to renew my trademark?",
      answer: "Trademark renewals occur at specific intervals: First, between the 5th and 6th year after registration (Section 8 Declaration of Use), then between the 9th and 10th year (Section 8 Declaration and Section 9 Renewal), and every 10 years thereafter. Missing these deadlines can result in the cancellation of your trademark registration.",
    },
    {
      title: "What documents are required for trademark renewal?",
      answer: "For trademark renewal, you'll need to submit: 1) A Declaration of Use (Section 8) showing your mark is still in use in commerce, 2) A specimen showing current use of your mark, and 3) The renewal application (Section 9) with appropriate fees. Additional documentation may be required depending on your specific situation.",
    },
    {
      title: "Can I file a trademark renewal late?",
      answer: "Yes, there is a six-month grace period after the renewal deadline, but additional fees will apply. However, if you miss the grace period, your trademark registration will be canceled, and you'll need to file a completely new application to protect your mark.",
    },
    {
      title: "What is a Section 8 & 15 Declaration?",
      answer: "A Section 8 Declaration is a sworn statement that your trademark is still in use in commerce. A Section 15 Declaration (optional) makes your trademark 'incontestable,' providing enhanced protection against certain legal challenges. These can be filed together between the 5th and 6th year after registration.",
    },
    {
      title: "How much does trademark renewal cost?",
      answer: "Trademark renewal fees vary based on the number of classes and types of filings. Basic government fees start at $225 per class for Section 8 Declarations and $500 per class for Section 9 Renewals. Additional fees may apply for late filings or expedited processing. Contact us for a detailed fee schedule based on your specific needs.",
    },
  ],
  footerHeading: "Need help with your trademark renewal?",
  footerDescription: "Our experienced trademark attorneys are here to guide you through the renewal process and ensure your intellectual property remains protected.",
  button: {
    title: "Schedule Consultation",
    variant: "secondary",
  },
};
