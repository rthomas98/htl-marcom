import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, FileText, Video, Download } from 'lucide-react';
import MarcomLayout from '@/Layouts/MarcomLayout';

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  </div>
);

export default function Show({ registration }) {
  const { legalnar } = registration;
  
  return (
    <MarcomLayout
      title={`${legalnar.title} | Hebert Thomas Law`}
      description={`Access your registration details and materials for ${legalnar.title}`}
    >
      <Head title={legalnar.title} />

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-sm rounded-lg overflow-hidden"
        >
          {/* Header */}
          <div className="relative">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={legalnar.featured_image}
                alt={legalnar.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h1 className="text-3xl font-heading font-bold text-white">
                {legalnar.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Status and Registration Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  registration.status === 'registered' ? 'bg-green-100 text-green-800' :
                  registration.status === 'attended' ? 'bg-blue-100 text-blue-800' :
                  registration.status === 'no-show' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                </span>
                <span className="text-sm text-gray-500">
                  Registered on {registration.registered_at}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-heading font-semibold">Event Details</h2>
                <dl className="space-y-4">
                  <InfoItem
                    icon={User}
                    label="Instructor"
                    value={legalnar.instructor.name}
                  />
                  {legalnar.type === 'live' && (
                    <>
                      <InfoItem
                        icon={Calendar}
                        label="Date"
                        value={legalnar.scheduled_start}
                      />
                      <InfoItem
                        icon={Clock}
                        label="Time"
                        value={`${legalnar.scheduled_start.split(' ').pop()} - ${legalnar.scheduled_end}`}
                      />
                      <InfoItem
                        icon={MapPin}
                        label="Timezone"
                        value={legalnar.timezone}
                      />
                    </>
                  )}
                </dl>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-heading font-semibold">Access & Materials</h2>
                <div className="space-y-4">
                  {legalnar.type === 'live' && legalnar.meeting_url && (
                    <a
                      href={legalnar.meeting_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
                    >
                      <Video className="w-5 h-5" />
                      <span>Join Live Session</span>
                    </a>
                  )}

                  {legalnar.recording_url && (
                    <a
                      href={legalnar.recording_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
                    >
                      <Video className="w-5 h-5" />
                      <span>Watch Recording</span>
                    </a>
                  )}

                  {legalnar.materials?.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-900">Materials</h3>
                      {legalnar.materials.map((material, index) => (
                        <a
                          key={index}
                          href={material.file}
                          download
                          className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
                        >
                          <Download className="w-5 h-5" />
                          <span>{material.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-heading font-semibold mb-4">Description</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: legalnar.description }} />
            </div>
          </div>
        </motion.div>
      </div>
    </MarcomLayout>
  );
} 