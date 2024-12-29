import React from 'react';

export default function ApplicationLogo({ className = "h-12 w-auto" }) {
    return (
        <img 
            src="/images/web-logo-black (2).svg" 
            alt="Hebert Thomas Law" 
            className={className}
        />
    );
}
