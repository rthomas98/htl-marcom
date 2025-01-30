import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { Blog1 } from '@/Components/Resources/Blog1';
import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
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

export default function Insights() {
  const { blogPosts, categories } = usePage().props;

  const blogData = {
    tagline: "Legal Insights",
    heading: "Knowledge Hub",
    description: "Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.",
    buttons: [
      { title: "View all", variant: "secondary" },
      ...(categories?.map(category => ({
        title: category.name,
        variant: "link"
      })) || [])
    ],
    categoryLink: route('insights'),
    blogPosts: {
      ...blogPosts,
      data: blogPosts.data?.map(post => ({
        url: `/blog/${post.slug}`,
        image: {
          src: post.featured_image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
          alt: post.title,
        },
        category: post.category?.name || 'Legal Insights',
        title: post.title,
        description: post.excerpt,
        avatar: {
          src: post.author?.profile_photo_url || 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
          alt: post.author?.name || 'Author',
        },
        fullName: post.author?.name || 'Hebert-Thomas Law',
        date: new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        readTime: `${Math.ceil(post.content?.split(' ').length / 200) || 5} min read`,
      })) || []
    }
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

      <Blog1 {...blogData} />
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
                  className="bg-cod-gray text-white hover:bg-cod-gray-dark rounded-full hover:text-cod-gray hover:bg-cod-gray/20"
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
