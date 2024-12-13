import React from 'react';

export default function BackgroundPattern({ className = '' }) {
    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            <svg
                className="absolute left-[50%] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-cod-gray/5 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="pattern-lines"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                        patternTransform="translate(-1 -1)"
                    >
                        <path
                            d="M.5 40V.5H40"
                            fill="none"
                            strokeDasharray="2 2"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#pattern-lines)" />
                <circle cx="64rem" cy="34rem" r="24rem" strokeWidth={2} fill="none" />
                <circle cx="64rem" cy="34rem" r="16rem" strokeWidth={2} fill="none" />
                <circle cx="64rem" cy="34rem" r="8rem" strokeWidth={2} fill="none" />
            </svg>
        </div>
    );
}
