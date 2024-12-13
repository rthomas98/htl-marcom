import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@relume_io/relume-ui';

export default function MarcomNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const trademarkServices = [
        { name: 'Overview', href: '/trademark-services' },
        { name: 'Trademark Search & Clearance', href: '/trademark-services/clearance-search' },
        { name: 'Trademark Registration', href: '/trademark-services/registration' },
        { name: 'Trademark Monitoring', href: '/trademark-services/monitoring' },
        { name: 'Trademark Enforcement', href: '/trademark-services/enforcement' },
        { name: 'Trademark Renewal', href: '/trademark-services/renewal' },
        { name: 'Trademark Licensing', href: '/trademark-services/licensing' },
        { name: 'International Trademarks', href: '/trademark-services/international' }
    ];

    const otherServices = [
        { name: 'Overview', href: '/legal-services' },
        { name: 'Business Law', href: '/legal-services/business-law' },
        { name: 'Estate Planning', href: '/legal-services/estate-planning' },
        { name: 'General Counsel', href: '/legal-services/general-counsel' },
        { name: 'Privacy & Data Protection', href: '/legal-services/privacy-data-protection' }
    ];

    const DropdownMenu = ({ items, isOpen, dropdownType }) => (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 z-50 mt-2 w-64 rounded-lg bg-white py-2 shadow-lg"
                >
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-cod-gray transition-colors hover:bg-pippin-lighter"
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );

    const NavDropdown = ({ type, items, children }) => {
        const isActive = activeDropdown === type;
        
        return (
            <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown(type)}
                onMouseLeave={(e) => {
                    // Check if we're moving to the dropdown menu
                    const rect = e.currentTarget.getBoundingClientRect();
                    const isMovingDown = e.clientY > rect.bottom;
                    
                    if (!isMovingDown) {
                        setActiveDropdown(null);
                    }
                }}
            >
                {children}
                <DropdownMenu
                    items={items}
                    isOpen={isActive}
                    dropdownType={type}
                />
            </div>
        );
    };

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            scrolled 
                ? 'bg-white shadow-sm' 
                : 'bg-transparent bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm'
        }`}>
            <div className="mx-auto w-full px-[5%] py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3">
                        <img 
                            src="/images/web-logo-black (2).svg" 
                            alt="Hebert Thomas Law" 
                            className="h-12 w-auto" 
                        />
                        <span className="hidden text-xl font-heading font-bold text-cod-gray lg:block">
                            Hebert-Thomas Law
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                        <div className="flex items-center space-x-6 xl:space-x-8">
                            <Link href="/" className="text-sm text-cod-gray hover:text-cod-gray-light">
                                Home
                            </Link>
                            <NavDropdown type="trademark" items={trademarkServices}>
                                <button
                                    className="flex items-center space-x-1 text-sm text-cod-gray hover:text-cod-gray-light"
                                >
                                    <span>Trademark Services</span>
                                    <ChevronDown className="size-4" />
                                </button>
                            </NavDropdown>
                            <NavDropdown type="other" items={otherServices}>
                                <button
                                    className="flex items-center space-x-1 text-sm text-cod-gray hover:text-cod-gray-light"
                                >
                                    <span>Other Legal Services</span>
                                    <ChevronDown className="size-4" />
                                </button>
                            </NavDropdown>
                            <Link href="/about-me" className="text-sm text-cod-gray hover:text-cod-gray-light">
                                About
                            </Link>
                            <Link href="/blog" className="text-sm text-cod-gray hover:text-cod-gray-light">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-sm text-cod-gray hover:text-cod-gray-light">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-cod-gray bg-pippin text-cod-gray hover:bg-cod-gray hover:text-white"
                        >
                            Schedule Call
                        </Button>
                        <Button
                            variant="solid"
                            size="sm"
                            className="bg-cod-gray text-white hover:bg-cod-gray-light"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile/Tablet Menu Button */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <button
                            className="text-cod-gray"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Menu className="size-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile/Tablet Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden"
                        >
                            <div className="mt-4 space-y-4 border-t border-cod-gray/10 pb-6 pt-4">
                                <Link
                                    href="/"
                                    className="block text-sm text-cod-gray hover:text-cod-gray-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                                <div className="space-y-2">
                                    <button
                                        className="flex w-full items-center justify-between text-sm text-cod-gray hover:text-cod-gray-light"
                                        onClick={() => setActiveDropdown(activeDropdown === 'trademark' ? null : 'trademark')}
                                    >
                                        <span>Trademark Services</span>
                                        <ChevronDown className={`size-4 transform transition-transform ${
                                            activeDropdown === 'trademark' ? 'rotate-180' : ''
                                        }`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'trademark' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-4 space-y-2"
                                            >
                                                {trademarkServices.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block py-1 text-sm text-cod-gray-light hover:text-cod-gray"
                                                        onClick={() => {
                                                            setActiveDropdown(null);
                                                            setIsOpen(false);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="space-y-2">
                                    <button
                                        className="flex w-full items-center justify-between text-sm text-cod-gray hover:text-cod-gray-light"
                                        onClick={() => setActiveDropdown(activeDropdown === 'other' ? null : 'other')}
                                    >
                                        <span>Other Legal Services</span>
                                        <ChevronDown className={`size-4 transform transition-transform ${
                                            activeDropdown === 'other' ? 'rotate-180' : ''
                                        }`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'other' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-4 space-y-2"
                                            >
                                                {otherServices.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block py-1 text-sm text-cod-gray-light hover:text-cod-gray"
                                                        onClick={() => {
                                                            setActiveDropdown(null);
                                                            setIsOpen(false);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <Link
                                    href="/blog"
                                    className="block text-sm text-cod-gray hover:text-cod-gray-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/about-me"
                                    className="block text-sm text-cod-gray hover:text-cod-gray-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block text-sm text-cod-gray hover:text-cod-gray-light"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                                <div className="grid gap-2 pt-2 sm:grid-cols-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-cod-gray bg-pippin text-cod-gray hover:bg-cod-gray hover:text-white"
                                    >
                                        Schedule Call
                                    </Button>
                                    <Button
                                        variant="solid"
                                        size="sm"
                                        className="w-full bg-cod-gray text-white hover:bg-cod-gray-light"
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
