import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function MarcomFooter() {
    const [emailInput, setEmailInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
    };

    const columnLinks = [
        {
            title: "Legal Services",
            links: [
                { title: "Trademark Services", url: "/trademark-services" },
                { title: "Business Law", url: "/legal-services/business-law" },
                { title: "Estate Planning", url: "/legal-services/estate-planning" },
                { title: "Privacy & Data", url: "/legal-services/privacy-data-protection" },
            ],
        },
        {
            title: "Resources",
            links: [
                { title: "Webinars", url: "/webinars" },
                { title: "Blog", url: "/blog" },
                { title: "FAQs", url: "/faqs" },
                { title: "Contact", url: "/contact" },
            ],
        },
        {
            title: "Company",
            links: [
                { title: "About Me", url: "/about" },
                { title: "Client Portal", url: "/login" },
                { title: "Schedule Consultation", url: "/contact" },
            ],
        },
    ];

    const socialMediaLinks = [
        { url: "#", icon: <Facebook className="h-5 w-5" /> },
        { url: "#", icon: <Instagram className="h-5 w-5" /> },
        { url: "#", icon: <Linkedin className="h-5 w-5" /> },
        { url: "#", icon: <Youtube className="h-5 w-5" /> },
    ];

    return (
        <footer className="border-t border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
                    {/* Links Section */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <Link href="/" className="col-span-full">
                            <img
                                src="/images/web-logo-black (2).svg"
                                alt="Hebert Thomas Law"
                                className="h-8 w-auto"
                            />
                        </Link>
                        {columnLinks.map((column, index) => (
                            <div key={index}>
                                <h3 className="font-heading text-sm font-semibold text-cod-gray">
                                    {column.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.url}
                                                className="text-sm text-gray-600 transition hover:text-cod-gray"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:pl-8">
                        <h3 className="font-heading text-sm font-semibold text-cod-gray">
                            Stay Updated
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Subscribe to our newsletter for legal insights and updates.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="flex max-w-md gap-x-4">
                                <input
                                    type="email"
                                    required
                                    className="min-w-0 flex-auto rounded-full border-0 bg-gray-100 px-4 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cod-gray"
                                    placeholder="Enter your email"
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="rounded-full bg-cod-gray px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cod-gray"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-3 text-xs text-gray-500">
                                By subscribing, you agree to our{' '}
                                <Link href="/privacy" className="underline hover:text-cod-gray">
                                    Privacy Policy
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <p className="text-xs text-gray-500">
                            © 2024 Hebert Thomas Law. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/privacy"
                                className="text-xs text-gray-500 hover:text-cod-gray"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-xs text-gray-500 hover:text-cod-gray"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4 sm:mt-0">
                        {socialMediaLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="text-gray-400 transition hover:text-cod-gray"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
