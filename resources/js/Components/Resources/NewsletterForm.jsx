import React from 'react';
import { motion } from 'framer-motion';

const NewsletterForm = () => {
  return (
    <motion.section
      id="subscribe"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="rounded-lg border border-cod-gray/10 bg-white p-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <form
              action="https://hebertthomaslaw.us19.list-manage.com/subscribe/post?u=e4b0a3faf160e76a19bcdc3c4&amp;id=b2ede287ff&amp;f_id=0043b8e7f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
              noValidate
            >
              <div id="mc_embed_signup_scroll" className="space-y-6">
                <div className="text-right text-sm text-cod-gray-light">
                  <span className="text-red-500">*</span> indicates required
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="mce-FNAME" className="text-sm font-medium text-cod-gray">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="FNAME"
                      id="mce-FNAME"
                      className="rounded-lg border-0 bg-gray-100 px-4 py-2.5 text-sm text-cod-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cod-gray"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="mce-LNAME" className="text-sm font-medium text-cod-gray">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="LNAME"
                      id="mce-LNAME"
                      className="rounded-lg border-0 bg-gray-100 px-4 py-2.5 text-sm text-cod-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cod-gray"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="mce-EMAIL" className="text-sm font-medium text-cod-gray">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    className="rounded-lg border-0 bg-gray-100 px-4 py-2.5 text-sm text-cod-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cod-gray"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="mce-MMERGE8" className="text-sm font-medium text-cod-gray">
                    Website
                  </label>
                  <input
                    type="text"
                    name="MMERGE8"
                    id="mce-MMERGE8"
                    className="rounded-lg border-0 bg-gray-100 px-4 py-2.5 text-sm text-cod-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cod-gray"
                  />
                </div>

                <div id="mce-responses" className="clear foot">
                  <div className="response hidden" id="mce-error-response"></div>
                  <div className="response hidden" id="mce-success-response"></div>
                </div>

                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text" name="b_e4b0a3faf160e76a19bcdc3c4_b2ede287ff" tabIndex="-1" value="" />
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="inline-flex items-center justify-center rounded-full bg-cod-gray px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pippin hover:text-cod-gray"
                  >
                    Subscribe
                  </button>
                  <p className="text-xs text-cod-gray-light">
                    By subscribing, you agree to our{' '}
                    <a href="/privacy" className="underline hover:text-cod-gray">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterForm;
