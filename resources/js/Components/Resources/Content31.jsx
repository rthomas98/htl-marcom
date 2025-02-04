import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { Link } from '@inertiajs/react';

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
              <form 
                action="https://hebertthomaslaw.us19.list-manage.com/subscribe/post?u=e4b0a3faf160e76a19bcdc3c4&amp;id=b2ede287ff&amp;f_id=005cb8e7f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate mb-4 flex flex-col gap-3 sm:gap-4" 
                target="_self" 
                noValidate
              >
                <div className="flex flex-col gap-2">
                  <Input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Email Address *"
                    required
                    className="border-gallery focus:border-cod-gray text-cod-gray placeholder:text-cod-gray-light"
                  />
                  <Input
                    type="text"
                    name="MMERGE26"
                    id="mce-MMERGE26"
                    placeholder="Contact Name"
                    className="border-gallery focus:border-cod-gray text-cod-gray placeholder:text-cod-gray-light"
                  />
                </div>
                
                <div id="mce-responses" className="clear foot">
                  <div className="response hidden" id="mce-error-response"></div>
                  <div className="response hidden" id="mce-success-response"></div>
                </div>

                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text" name="b_e4b0a3faf160e76a19bcdc3c4_b2ede287ff" tabIndex="-1" />
                </div>

                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray`}
                >
                  Subscribe
                </button>
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
    button: { 
      title: "Subscribe", 
      variant: 'primary', 
      href: '#' 
    },
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
