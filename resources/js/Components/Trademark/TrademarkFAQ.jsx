import React from 'react';
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

const defaultContent = {
  heading: "Trademark FAQs",
  description:
    "Get answers to common questions about trademark registration, protection, and maintenance. Our expertise helps you navigate the complexities of intellectual property law.",
 
  questions: [
    {
      title: "What is a trademark and why do I need one?",
      answer:
        "A trademark is a distinctive sign, symbol, word, or design that identifies and distinguishes your goods or services from others in the marketplace. Registering a trademark provides legal protection, exclusive rights to use the mark, and helps prevent others from using similar marks that could confuse consumers.",
    },
    {
      title: "How long does the trademark registration process take?",
      answer:
        "The trademark registration process typically takes 8-12 months from filing to registration, assuming no complications arise. This timeline includes the initial examination, publication period, and final registration. Our firm helps expedite this process by ensuring accurate filings and prompt responses to office actions.",
    },
    {
      title: "What can and cannot be trademarked?",
      answer:
        "You can trademark business names, logos, slogans, symbols, and even sounds or colors that identify your brand. However, generic terms, purely descriptive marks, surnames, and geographic terms generally cannot be trademarked. Our attorneys can help evaluate your mark's eligibility and strength before filing.",
    },
    {
      title: "How long does trademark protection last?",
      answer:
        "Trademark rights can last indefinitely as long as you continue using the mark in commerce and file the required maintenance documents. You must file declarations of continued use between the 5th and 6th years, and then every 10 years thereafter. We help monitor these deadlines and handle renewals.",
    },
    {
      title: "What's the difference between ™ and ®?",
      answer:
        "The ™ symbol can be used with any trademark, whether registered or not, to claim common law rights. The ® symbol can only be used after your mark is officially registered with the USPTO. Using ® without registration can result in penalties. We ensure proper symbol usage throughout the registration process.",
    },
  ],
};

export default function TrademarkFAQ({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-pippin px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="font-heading mb-5 text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="font-sans text-cod-gray/80 md:text-lg">
            {content.description}
          </p>
          
        </div>
        <Accordion type="multiple" className="space-y-4">
          {content.questions.map((question, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-cod-gray/10 last:border-0"
            >
              <AccordionTrigger className="font-heading py-4 text-left text-lg font-medium text-cod-gray md:py-5 md:text-xl">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4 font-sans text-cod-gray/80 md:pb-6 md:text-lg">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
