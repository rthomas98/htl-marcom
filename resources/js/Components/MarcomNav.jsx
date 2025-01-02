import React, { useState, useEffect } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { Menu, ChevronDown, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@relume_io/relume-ui';

export default function MarcomNav() {
    const { auth } = usePage().props;
    const currentPath = usePage().url;
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleLogout = () => {
        router.post(route('logout'));
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const trademarkServices = [
        { name: 'Overview', href: route('trademark-services.overview') },
        { name: 'Trademark Search & Clearance', href: route('trademark-services.clearance-search') },
        { name: 'Trademark Registration', href: route('trademark-services.registration') },
        { name: 'Trademark Monitoring', href: route('trademark-services.monitoring') },
        { name: 'Trademark Enforcement', href: route('trademark-services.enforcement') },
        { name: 'Trademark Renewal', href: route('trademark-services.renewal') },
        { name: 'Trademark Licensing', href: route('trademark-services.licensing') },
        { name: 'International Trademarks', href: route('trademark-services.international') }
    ];

    const otherServices = [
        { name: 'Overview', href: route('legal-services.overview') },
        { name: 'Business Law', href: route('legal-services.business-law') },
        { name: 'Estate Planning', href: route('legal-services.estate-planning') },
        { name: 'General Counsel', href: route('legal-services.general-counsel') },
        { name: 'Privacy & Data Protection', href: route('legal-services.privacy-data') }
    ];

    const legalnars = [
        { name: 'All Legalnars', href: route('legalnars.index') },
        { name: 'Upcoming Live Sessions', href: route('legalnars.upcoming') },
        { name: 'On-Demand Content', href: route('legalnars.on-demand') },
        { name: 'My Registrations', href: route('legalnars.my-registrations') }
    ];

    const userMenu = [
        { name: 'Profile', href: route('profile.edit') },
        { name: 'My Registrations', href: route('legalnars.my-registrations') }
    ];

    const isActive = (href) => {
        if (!href || !currentPath) return false;
        const hrefPath = new URL(href, window.location.origin).pathname;
        return currentPath === hrefPath || currentPath.startsWith(hrefPath + '/');
    };

    const getLinkClasses = (href) => {
        return `transition-colors duration-200 hover:text-pippin-dark ${
            isActive(href) 
                ? 'text-pippin font-medium border-b-2 border-pippin' 
                : 'text-cod-gray'
        }`;
    };

    const getDropdownLinkClasses = (href) => {
        return `block px-4 py-2 text-sm transition-colors duration-200 hover:bg-gallery ${
            isActive(href)
                ? 'bg-pippin-lighter text-cod-gray font-medium'
                : 'text-cod-gray-light'
        }`;
    };

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
                            className={getDropdownLinkClasses(item.href)}
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

    const navigation = [
        { name: 'Home', href: route('home') },
        { name: 'About', href: route('about-me') },
        { name: 'Trademark Services', href: route('trademark-services.overview') },
        { name: 'Legal Services', href: route('legal-services.overview') },
        { 
            name: 'Legalnars', 
            href: route('legalnars.index'),
            children: [
                { name: 'All Legalnars', href: route('legalnars.index') },
                { name: 'Upcoming Live Sessions', href: route('legalnars.upcoming') },
                { name: 'On-Demand Content', href: route('legalnars.on-demand') },
                { name: 'My Registrations', href: route('legalnars.my-registrations') },
            ]
        },
        { name: 'Contact', href: route('contact') },
    ];

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
                            <Link
                                href={route('home')}
                                className={getLinkClasses(route('home'))}
                            >
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
                            <NavDropdown type="legalnars" items={legalnars}>
                                <button
                                    className="flex items-center space-x-1 text-sm text-cod-gray hover:text-cod-gray-light"
                                >
                                    <span>Legalnars</span>
                                    <ChevronDown className="size-4" />
                                </button>
                            </NavDropdown>
                            <Link
                                href={route('about-me')}
                                className={getLinkClasses(route('about-me'))}
                            >
                                About
                            </Link>
                            <Link
                                href={route('contact')}
                                className={getLinkClasses(route('contact'))}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        {auth.user ? (
                            <NavDropdown type="user" items={userMenu}>
                                <div className="flex items-center space-x-4">
                                    <div className="flex cursor-pointer items-center space-x-2 text-sm text-cod-gray">
                                        <User className="size-4" />
                                        <span>{auth.user.name}</span>
                                        <ChevronDown className="size-4" />
                                    </div>
                                    <Button
                                        onClick={handleLogout}
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center space-x-2 border-cod-gray bg-pippin text-cod-gray hover:bg-cod-gray hover:text-white"
                                    >
                                        <LogOut className="size-4" />
                                        <span>Logout</span>
                                    </Button>
                                </div>
                            </NavDropdown>
                        ) : (
                            <>
                                <Link href={route('login')}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-cod-gray bg-pippin text-cod-gray hover:bg-cod-gray hover:text-white"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link href={route('register')}>
                                    <Button
                                        variant="solid"
                                        size="sm"
                                        className="bg-cod-gray text-white hover:bg-cod-gray-light"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile/Tablet Menu Button */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        {auth.user && (
                            <div className="flex items-center space-x-2 text-sm text-cod-gray">
                                <User className="size-4" />
                                <span>{auth.user.name}</span>
                            </div>
                        )}
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
                                    href={route('home')}
                                    className={getLinkClasses(route('home'))}
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
                                                        className={getDropdownLinkClasses(item.href)}
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
                                                        className={getDropdownLinkClasses(item.href)}
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
                                        onClick={() => setActiveDropdown(activeDropdown === 'legalnars' ? null : 'legalnars')}
                                    >
                                        <span>Legalnars</span>
                                        <ChevronDown className={`size-4 transform transition-transform ${
                                            activeDropdown === 'legalnars' ? 'rotate-180' : ''
                                        }`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'legalnars' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-4 space-y-2"
                                            >
                                                {legalnars.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={getDropdownLinkClasses(item.href)}
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
                                    href={route('about-me')}
                                    className={getLinkClasses(route('about-me'))}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href={route('contact')}
                                    className={getLinkClasses(route('contact'))}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                                
                                {auth.user ? (
                                    <button
                                        onClick={handleLogout}
                                        className="flex w-full items-center space-x-2 text-sm text-cod-gray hover:text-cod-gray-light"
                                    >
                                        <LogOut className="size-4" />
                                        <span>Logout</span>
                                    </button>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className={getLinkClasses(route('login'))}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className={getLinkClasses(route('register'))}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
