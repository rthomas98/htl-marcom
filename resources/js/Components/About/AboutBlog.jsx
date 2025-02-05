import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function AboutBlog({ 
    tagline,
    heading,
    description,
    posts,
    className = "",
    ...props 
}) {
    const content = {
        tagline: tagline || "Latest Blog Posts",
        heading: heading || "Stay Updated with Legal Insights",
        description: description || "Expert analysis and practical guidance on intellectual property and business law topics that matter to your business.",
        posts: posts || []
    };

    return (
        <section className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
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
                        <p className="text-cod-gray md:text-lg">{content.description}</p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {content.posts.map((post, index) => (
                        <motion.div 
                            key={post.id}
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col"
                        >
                            <div className="mb-6 overflow-hidden rounded-lg shadow-lg md:mb-8">
                                <img 
                                    src={post.featured_image} 
                                    alt={post.title}
                                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-56 lg:h-64" 
                                />
                            </div>
                            <div className="mb-4 flex items-center gap-4">
                                <img 
                                    src={post.author_profile_image} 
                                    alt={post.author?.name || 'Author'}
                                    className="h-10 w-10 rounded-full object-cover" 
                                />
                                <div>
                                    <p className="font-semibold text-cod-gray">{post.author?.name}</p>
                                    <p className="text-sm text-cod-gray/60">
                                        {new Date(post.published_at).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                            <h3 className="font-heading mb-4 text-xl font-bold text-cod-gray md:text-2xl line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="mb-6 text-cod-gray/80 line-clamp-3">{post.excerpt}</p>
                            <Link
                                href={route('insights') + '/' + post.slug}
                                className="mt-auto inline-flex items-center justify-center rounded-full bg-cod-gray px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pippin hover:text-cod-gray"
                            >
                                Read More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
