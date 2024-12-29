import React from 'react';
import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function RegistrationButton({ legalnar, className = '' }) {
  const handleRegister = () => {
    router.post(route('legalnars.register', legalnar.id));
  };

  const isFullyBooked = legalnar.type === 'live' && 
    legalnar.max_attendees && 
    legalnar.registered_attendees_count >= legalnar.max_attendees;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <button
        onClick={handleRegister}
        disabled={isFullyBooked}
        className={`
          inline-flex items-center justify-center px-6 py-3 border border-transparent
          text-base font-medium rounded-md shadow-sm
          ${isFullyBooked
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
          }
          ${className}
        `}
      >
        {isFullyBooked ? 'Fully Booked' : (
          <>
            Register Now
            {legalnar.price > 0 && (
              <span className="ml-2">${legalnar.price}</span>
            )}
          </>
        )}
      </button>
    </motion.div>
  );
} 