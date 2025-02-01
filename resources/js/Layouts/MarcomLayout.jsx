import React, { useEffect } from 'react'
import { Link, Head, usePage } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import ApplicationLogo from '@/Components/ApplicationLogo'
import MarcomNav from '@/Components/MarcomNav'
import MarcomFooter from '@/Components/MarcomFooter'

export default function MarcomLayout({ children, title, description }) {
    const { csrf_token, auth, recaptcha_site_key } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    useEffect(() => {
        // Make reCAPTCHA site key available globally
        window.recaptchaSiteKey = recaptcha_site_key;
    }, [recaptcha_site_key]);

    return (
        <div className="min-h-screen bg-gallery">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="csrf-token" content={csrf_token} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation */}
            <MarcomNav />

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-20"
            >
                {children}
            </motion.main>

            {/* Footer */}
            <MarcomFooter />
        </div>
    );
}