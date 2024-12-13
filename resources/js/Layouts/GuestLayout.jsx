import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';

export default function GuestLayout({ children, title, description }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="description" content={description} />
            </Head>
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
