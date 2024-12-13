import React from 'react';

export default function Logo({ className = "h-10 w-auto" }) {
    return (
        <svg
            className={className}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="40" height="40" rx="8" fill="#141414"/>
            <path
                d="M12 28V12H16.8L20.4 22.6L24 12H28.8V28H25.2V17.2L21.6 28H19.2L15.6 17.2V28H12Z"
                fill="white"
            />
        </svg>
    );
}
