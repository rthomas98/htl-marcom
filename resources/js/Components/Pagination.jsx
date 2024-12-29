import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ links }) {
    if (links.length <= 3) return null;

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                {links[0].url && (
                    <Link
                        href={links[0].url}
                        className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-cod-gray-light hover:border-cod-gray hover:text-cod-gray"
                    >
                        <ChevronLeft className="mr-3 h-5 w-5" aria-hidden="true" />
                        Previous
                    </Link>
                )}
            </div>
            <div className="hidden md:-mt-px md:flex">
                {links.slice(1, -1).map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                            link.active
                                ? 'border-cod-gray text-cod-gray'
                                : 'border-transparent text-cod-gray-light hover:border-cod-gray hover:text-cod-gray'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                {links[links.length - 1].url && (
                    <Link
                        href={links[links.length - 1].url}
                        className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-cod-gray-light hover:border-cod-gray hover:text-cod-gray"
                    >
                        Next
                        <ChevronRight className="ml-3 h-5 w-5" aria-hidden="true" />
                    </Link>
                )}
            </div>
        </nav>
    );
} 