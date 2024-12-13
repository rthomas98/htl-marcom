import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

const defaultContent = {
  heading: "Common Questions",
  description:
    "Find answers to frequently asked questions about trademark clearance searches and the registration process.",
  questions: [
    {
      title: "What is a trademark clearance search?",
      answer:
        "A trademark clearance search is a comprehensive review of existing trademarks, business names, and other commercial uses to determine if your proposed mark is available for use and registration. It helps identify potential conflicts that could lead to rejection by the USPTO or legal challenges from other trademark owners.",
    },
    {
      title: "Why do I need a clearance search before filing?",
      answer:
        "A clearance search helps prevent costly conflicts and legal issues by identifying potential problems before you invest in branding and registration. It can save you time and money by avoiding USPTO rejections and potential trademark infringement claims from existing mark owners.",
    },
    {
      title: "What does the search process include?",
      answer:
        "Our clearance search includes federal trademark registrations, state registrations, common law uses, domain names, and business names. We examine similar marks, phonetic equivalents, and variations to provide a comprehensive analysis of potential conflicts and risks.",
    },
    {
      title: "How long does a clearance search take?",
      answer:
        "A thorough clearance search typically takes 5-7 business days. This includes comprehensive database searches, analysis of results, and preparation of a detailed report with recommendations. Rush services are available for time-sensitive matters.",
    },
    {
      title: "What happens after the search is complete?",
      answer:
        "You'll receive a detailed report outlining potential conflicts, an analysis of your mark's strength, and recommendations for proceeding. We'll schedule a consultation to discuss the results and help you make informed decisions about trademark registration and use.",
    },
  ],
  footerHeading: "Need More Information?",
  footerDescription: "Contact us for a consultation about your specific trademark needs.",
  button: {
    title: "Schedule Consultation",
    variant: "secondary",
    className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white"
  },
};

export default function ClearanceSearchFAQ({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <section className="bg-pippin px-[5%] py-16 md:py-24 lg:py-28">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container w-full max-w-2xl"
      >
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading mb-5 text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl"
          >
            {content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-lg text-cod-gray/80 md:text-xl"
          >
            {content.description}
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12"
        >
          {content.questions.map((question, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-heading mb-3 text-xl font-bold text-cod-gray md:mb-4 md:text-2xl">
                {question.title}
              </h3>
              <p className="font-sans text-cod-gray/80">
                {question.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-12 max-w-md text-center md:mt-16 lg:mt-20"
        >
          <h4 className="font-heading mb-3 text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl lg:text-4xl">
            {content.footerHeading}
          </h4>
          <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
            {content.footerDescription}
          </p>
          <div className="mt-6 md:mt-8">
            <Button 
              {...content.button}
              className={`${content.button.className} transition-colors duration-300`}
            >
              {content.button.title}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
