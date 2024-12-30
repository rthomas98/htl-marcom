import React from 'react';
import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Button } from '@relume_io/relume-ui';

export default function RegistrationButton({ legalnar, className = '' }) {
  const handleRegister = () => {
    console.log('Register clicked for legalnar:', legalnar.id);
    
    // Get the authenticated user's information
    const user = window.auth?.user;
    
    if (!user) {
      console.error('User not authenticated');
      window.location.href = route('login');
      return;
    }

    // Prepare registration data
    const registrationData = {
      name: user.name,
      email: user.email,
      company: user.company || '',
      special_requirements: '',
    };

    console.log('Submitting registration with data:', registrationData);

    // Use router.post for the registration
    router.post(route('legalnars.register', legalnar.id), registrationData, {
      preserveScroll: true,
      onBefore: () => console.log('Before registration'),
      onStart: () => console.log('Registration started'),
      onFinish: (response) => {
        console.log('Registration finished', response);
        if (response?.props?.flash?.error) {
          console.error('Registration error:', response.props.flash.error);
        }
      },
      onError: (errors) => console.error('Registration error:', errors),
      onSuccess: (page) => {
        console.log('Registration successful', page);
        // Check if we need to redirect to payment
        if (page?.props?.redirect && page.props.redirect.includes('payment')) {
          window.location.href = page.props.redirect;
        }
      },
    });
  };

  const isFullyBooked = legalnar.type === 'live' && 
    legalnar.max_attendees && 
    legalnar.registered_attendees_count >= legalnar.max_attendees;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={handleRegister}
        disabled={isFullyBooked}
        variant="solid"
        className={`
          ${isFullyBooked
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-cod-gray text-white hover:bg-cod-gray-light'
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
      </Button>
    </motion.div>
  );
} 