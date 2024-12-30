import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@relume_io/relume-ui';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Dashboard({ auth, recent_registrations }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-cod-gray">
                                    My Legalnars
                                </h3>
                                <Link href={route('legalnars.my-registrations')}>
                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="text-cod-gray hover:text-cod-gray-light"
                                    >
                                        View All
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-6">
                                {recent_registrations?.length > 0 ? (
                                    <div className="space-y-4">
                                        {recent_registrations.map((registration) => (
                                            <div
                                                key={registration.id}
                                                className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pippin">
                                                        <Calendar className="h-5 w-5 text-cod-gray" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-cod-gray">
                                                            {registration.legalnar.title}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">
                                                            {registration.legalnar.type === 'live'
                                                                ? `Scheduled for ${registration.legalnar.scheduled_start}`
                                                                : 'On-Demand Content'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Link
                                                    href={route('legalnars.show', registration.id)}
                                                    className="text-sm text-cod-gray hover:text-cod-gray-light"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                                        <h4 className="text-sm font-medium text-gray-900">
                                            No Legalnar Registrations
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Get started by browsing our available Legalnars.
                                        </p>
                                        <div className="mt-6">
                                            <Link href={route('legalnars.upcoming')}>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-cod-gray bg-pippin text-cod-gray hover:bg-cod-gray hover:text-white"
                                                >
                                                    Browse Legalnars
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
