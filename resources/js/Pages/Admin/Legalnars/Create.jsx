import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
    const initialFormData = {
        // Basic Information
        title: '',
        slug: '',
        description: '',
        learning_outcomes: '',
        level: '',
        
        // Session Details
        type: 'live',
        duration_minutes: 60,
        price: '',
        max_attendees: '',
        scheduled_start: '',
        scheduled_end: '',
        meeting_url: '',
        recording_url: '',
        
        // Status and Settings
        is_featured: false,
        is_published: false,
        published_at: '',
        completion_threshold: 85,
        instructor_id: '',
        is_live: false,
        
        // Media and Resources
        resources: [],
        featured_image: null,
        additional_images: [],
        
        // Series Information
        series_id: null,
        session_number: null,
    };

    const { data, setData, post, processing, errors } = useForm(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.legalnars.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Legalnar" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                {/* Form fields will go here */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
