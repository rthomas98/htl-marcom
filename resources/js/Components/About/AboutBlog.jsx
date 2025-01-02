import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const blogPost = {
    url: "#",
    image: {
        src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
        alt: "Trademark Registration Process",
    },
    category: "Trademark Law",
    readTime: "5 min read",
    title: "Understanding the Trademark Registration Process",
    description: "A comprehensive guide to navigating the trademark registration process, from initial search to final registration...",
    button: {
        title: "Read more",
        variant: "link",
        size: "link",
        className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray-light flex items-center",
        iconRight: <ChevronRight className="ml-2 h-4 w-4" />,
    },
};

const defaultBlogPosts = [
    {
        ...blogPost,
        image: {
            src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
            alt: "Trademark Registration Guide",
        },
        category: "Trademark Law",
        title: "Understanding the Trademark Registration Process",
        description: "A comprehensive guide to navigating the trademark registration process, from initial search to final registration...",
        button: {
            title: "Read More",
            variant: "link",
            href: "/blog/trademark-registration-process",
            className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray flex items-center gap-2",
            iconRight: <ChevronRight className="h-4 w-4" />,
        },
    },
    {
        ...blogPost,
        image: {
            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
            alt: "IP Portfolio Management",
        },
        category: "IP Strategy",
        title: "Building a Strong IP Portfolio for Your Business",
        description: "Learn how to develop and maintain a comprehensive intellectual property portfolio that protects your business assets...",
        button: {
            title: "Read More",
            variant: "link",
            href: "/blog/ip-portfolio-management",
            className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray flex items-center gap-2",
            iconRight: <ChevronRight className="h-4 w-4" />,
        },
    },
    {
        ...blogPost,
        image: {
            src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
            alt: "Business Formation",
        },
        category: "Business Law",
        title: "Legal Considerations for Business Formation",
        description: "Essential legal steps and considerations when forming your business, from entity selection to compliance requirements...",
        button: {
            title: "Read More",
            variant: "link",
            href: "/blog/business-formation",
            className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray flex items-center gap-2",
            iconRight: <ChevronRight className="h-4 w-4" />,
        },
    },
    {
        ...blogPost,
        image: {
            src: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1000",
            alt: "IP Protection Strategies",
        },
        category: "IP Protection",
        title: "Modern Strategies for IP Protection",
        description: "Discover the latest strategies and best practices for protecting your intellectual property in the digital age...",
        button: {
            title: "Read More",
            variant: "link",
            href: "/blog/ip-protection-strategies",
            className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray flex items-center gap-2",
            iconRight: <ChevronRight className="h-4 w-4" />,
        },
    },
];

export default function AboutBlog({ 
    tagline,
    heading,
    description,
    blogPosts,
    button,
    className = "",
    ...props 
}) {
    const content = {
        tagline: tagline || "Legal Insights",
        heading: heading || "Latest from Our Blog",
        description: description || "Stay informed with our latest articles on intellectual property law, business formation, and legal strategy.",
        blogPosts: blogPosts || defaultBlogPosts,
        button: button || { 
            title: "View all articles",
            variant: "secondary"
        }
    };

    return (
        <section className={`bg-pippin-lighter px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="mb-12 md:mb-18 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-full max-w-lg">
                        <p className="mb-3 font-semibold text-cod-gray md:mb-4">{content.tagline}</p>
                        <h2 className="font-heading mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                            {content.heading}
                        </h2>
                        <p className="text-cod-gray/90 md:text-lg">{content.description}</p>
                    </div>
                </motion.div>
                <div className="flex flex-col justify-start">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16 lg:grid-cols-2">
                        {content.blogPosts.map((post, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="grid gap-x-8 gap-y-6 md:grid-cols-[.75fr_1fr] md:gap-y-4"
                            >
                                <a href={post.url} className="block w-full overflow-hidden rounded-lg">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        src={post.image.src}
                                        alt={post.image.alt}
                                        className="aspect-square w-full object-cover shadow-md"
                                    />
                                </a>
                                <div className="flex h-full flex-col items-start justify-start">
                                    <div className="rb-4 mb-3 flex w-full items-center justify-start md:mb-4">
                                        <p className="mr-4 rounded-md bg-cod-gray px-3 py-1 text-sm font-semibold text-white">
                                            {post.category}
                                        </p>
                                        <p className="inline text-sm font-semibold text-cod-gray/70">
                                            {post.readTime}
                                        </p>
                                    </div>
                                    <div className="flex w-full flex-col items-start justify-start">
                                        <a 
                                            className="mb-2 transition-colors hover:text-cod-gray/70" 
                                            href={post.url}
                                        >
                                            <h3 className="text-xl font-bold text-cod-gray md:text-2xl">
                                                {post.title}
                                            </h3>
                                        </a>
                                        <p className="text-cod-gray/80">{post.description}</p>
                                        <Button
                                            {...post.button}
                                            className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                                        >
                                            {post.button.title}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        className="flex items-center justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button {...content.button} className="mt-10 md:mt-14 lg:mt-16">
                            {content.button.title}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
