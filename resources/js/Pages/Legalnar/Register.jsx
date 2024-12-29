import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';

export default function Register({ legalnar }) {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    company: '',
    special_requirements: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('legalnars.register.store', legalnar.id));
  };

  return (
    <MarcomLayout>
      <Head title={`Register for ${legalnar.title}`} />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Register for {legalnar.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Please fill out the registration form below.
              </p>
            </div>

            <div className="border-t border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6 p-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={data.company}
                    onChange={e => setData('company', e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.company && (
                    <p className="mt-2 text-sm text-red-600">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="special_requirements" className="block text-sm font-medium text-gray-700">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    id="special_requirements"
                    value={data.special_requirements}
                    onChange={e => setData('special_requirements', e.target.value)}
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.special_requirements && (
                    <p className="mt-2 text-sm text-red-600">{errors.special_requirements}</p>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={processing}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {processing ? 'Processing...' : 'Complete Registration'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MarcomLayout>
  );
}
