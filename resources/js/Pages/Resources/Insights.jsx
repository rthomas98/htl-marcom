import React, { useState } from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { Blog1 } from '@/Components/Resources/Blog1';
import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Input,
} from "@relume_io/relume-ui";
import { Plus } from 'lucide-react';

const QuestionsProps = {
  title: String,
  answer: String,
};

const Faq5Props = {
  heading: String,
  description: String,
  footerHeading: String,
  footerDescription: String,
  button: Object,
  questions: Array,
};

const Faq5Defaults = {
  heading: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our legal services and expertise.",
  questions: [
    {
      title: "What areas of law do you specialize in?",
      answer:
        "We specialize in trademark law, business law, estate planning, general counsel services, and privacy & data protection. Our experienced team provides comprehensive legal solutions tailored to your specific needs.",
    },
    {
      title: "How can I protect my intellectual property?",
      answer:
        "We offer complete trademark services including clearance searches, registration, monitoring, enforcement, renewal, licensing, and international services. Our team will guide you through the process of securing and maintaining your intellectual property rights.",
    },
    {
      title: "What is the trademark registration process?",
      answer:
        "The trademark registration process involves several steps: conducting a clearance search, filing an application, responding to office actions if any, publication for opposition, and finally registration. We handle the entire process for you, ensuring proper protection of your brand.",
    },
    {
      title: "Do you offer international trademark services?",
      answer:
        "Yes, we provide comprehensive international trademark services. We can help you protect your brand globally through various international treaties and conventions, managing the process across different jurisdictions.",
    },
    {
      title: "How long does trademark registration take?",
      answer:
        "The trademark registration process typically takes 8-12 months, though this can vary depending on various factors including office actions and oppositions. We'll keep you informed throughout the process and handle any challenges that arise.",
    },
  ],
  footerHeading: "Need more information?",
  footerDescription: "Contact our team for personalized assistance with your legal needs.",
  button: {
    title: "Contact Us",
    variant: "secondary",
  },
};

const NewsletterDefaults = {
  heading: "Stay Updated with Legal Insights",
  description: "Subscribe to our newsletter for the latest updates on trademark law, intellectual property, and legal strategies.",
  inputPlaceholder: "Enter your email address",
  button: { 
    title: "Subscribe",
    variant: "secondary",
  },
  termsAndConditions: `
  <p class='text-xs font-sans text-cod-gray-light'>
    By subscribing, you agree to our
    <a href='/privacy-policy' class='text-cod-gray hover:text-cod-gray-dark underline transition-colors duration-200'> Privacy Policy</a>.
  </p>
  `,
};

export default function Insights() {
  const { blogPosts, categories, filters } = usePage().props;
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const blog1Data = {
    tagline: "Legal Insights",
    heading: "Knowledge Hub",
    description: "Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.",
    buttons: [
      { 
        title: "View all", 
        variant: "secondary",
        href: route('insights'),
        active: !filters.category && !filters.search
      },
      ...(categories?.map(category => ({
        title: category.name,
        variant: "link",
        href: route('insights', { category: category.slug }),
        active: filters.category === category.slug
      })) || [])
    ],
    blogPosts: (blogPosts.data || [])
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      .map(post => ({
        url: route('insight.detail', { slug: post.slug }),
        image: {
          src: post.featured_image_url || '/images/placeholders/blog-placeholder.svg',
          alt: post.title || 'Blog post image',
        },
        category: post.category?.name || 'Legal Insights',
        title: post.title,
        description: post.excerpt,
        avatar: {
          src: post.author_profile_image ? encodeURI(post.author_profile_image) : '/images/web-logo-black (2).svg',
          alt: `${post.author?.name || 'Author'}'s profile picture`,
        },
        fullName: post.author?.name || 'Hebert-Thomas Law',
        date: new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        readTime: `${Math.ceil((post.content?.length || 0) / 1000)} min read`,
      })) || [],
    links: blogPosts.links
  };

  return (
    <>
      <Head>
        <title>Insights - Hebert-Thomas Law</title>
        <meta 
          name="description" 
          content="Legal insights and resources from Hebert-Thomas Law" 
        />
      </Head>

      <Blog1 {...blog1Data} />
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gallery">
        <div className="container">
          <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
            <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {Faq5Defaults.heading}
            </h2>
            <p className="font-sans text-cod-gray-light md:text-md">{Faq5Defaults.description}</p>
          </div>
          <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
            {Faq5Defaults.questions.map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-cod-gray bg-white px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Plus className="h-7 w-7 shrink-0 text-cod-gray transition-transform duration-300 md:h-8 md:w-8" />
                  }
                  className="py-4 font-sans text-cod-gray md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-cod-gray-light md:pb-6">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 md:mt-18 lg:mt-20">
            <h4 className="mb-3 font-heading text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {Faq5Defaults.footerHeading}
            </h4>
            <p className="font-sans text-cod-gray-light md:text-md">
              {Faq5Defaults.footerDescription}
            </p>
            <div className="mt-6 md:mt-8">
              <Link href={route('contact')}>
                <Button
                  variant="secondary"
                  className="bg-cod-gray text-white hover:bg-cod-gray-dark rounded-full"
                >
                  {Faq5Defaults.button.title}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

Insights.layout = page => <MarcomLayout children={page} />
