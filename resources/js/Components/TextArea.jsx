import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextArea({ className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                'border-gray-300 focus:border-cod-gray focus:ring-cod-gray rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
