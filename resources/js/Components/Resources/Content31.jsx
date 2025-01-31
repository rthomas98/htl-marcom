import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const Content31 = ({ subscribe, children, className = "" }) => {
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.5fr] lg:gap-x-20">
          <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-20 font-sans prose-headings:font-heading prose-headings:text-cod-gray prose-p:text-cod-gray-light prose-blockquote:text-cod-gray-light prose-blockquote:border-l-pippin prose-a:text-cod-gray hover:prose-a:text-cod-gray-light prose-img:rounded-lg">
            {children}
          </div>
          <div>
            <div className="border border-gallery bg-white p-8 lg:sticky lg:top-20 rounded-lg">
              <h6 className="mb-3 text-md font-heading font-bold leading-[1.4] text-cod-gray md:mb-4 md:text-xl">
                {subscribe.title}
              </h6>
              <p className="mb-3 font-sans text-cod-gray-light md:mb-4">{subscribe.description}</p>
              <form className="mb-4 flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
                <Input
                  id="email"
                  type="email"
                  placeholder={subscribe.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="border-gallery focus:border-cod-gray text-cod-gray placeholder:text-cod-gray-light"
                />
                <Button 
                  {...subscribe.button}
                  className="bg-cod-gray text-white hover:bg-cod-gray-light transition-colors duration-200"
                >
                  {subscribe.button.title}
                </Button>
              </form>
              <div 
                dangerouslySetInnerHTML={{ __html: subscribe.termsAndConditions }} 
                className="font-sans text-cod-gray-light [&_a]:text-cod-gray [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-cod-gray-light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content31Defaults = {
  subscribe: {
    title: "Subscribe to Our Newsletter",
    description: "Stay updated with our latest insights and legal updates delivered directly to your inbox.",
    inputPlaceholder: "Enter your email",
    button: { title: "Subscribe", size: "sm" },
    termsAndConditions: `
      <p class='text-xs'>
        By subscribing you agree to our 
        <a href='/privacy-policy' class='underline'>Privacy Policy</a>
        and consent to receive our newsletters.
      </p>
    `,
  }
};

export default Content31;
