import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
    ],
    presets: [require('@relume_io/relume-tailwind')],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                heading: ['Heebo', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'cod-gray-lightest': '#E7E7E7',
                'cod-gray-lighter': '#D0D0D0',
                'cod-gray-light': '#5A5A5A',
                'cod-gray': '#141414',
                'cod-gray-dark': '#101010',
                'cod-gray-darker': '#080808',
                'cod-gray-darkest': '#060606',

                'pippin-lightest': '#F4F4F4',
                'pippin-lighter': '#FFFAF9',
                'pippin-light': '#FFEEEC',
                'pippin': '#FFE8E5',
                'pippin-dark': '#CCB9B7',
                'pippin-darker': '#665C5B',
                'pippin-darkest': '#4C4544',

                'mine-shaft-lightest': '#E8E8E8',
                'mine-shaft-lighter': '#D2D2D2',
                'mine-shaft-light': '#646464',
                'mine-shaft': '#222222',
                'mine-shaft-dark': '#1B1B1B',
                'mine-shaft-darker': '#0D0D0D',
                'mine-shaft-darkest': '#0A0A0A',

                'gallery-lightest': '#FDFDFD',
                'gallery-lighter': '#FCFCFC',
                'gallery-light': '#F4F4F4',
                'gallery': '#F0F0F0',
                'gallery-dark': '#C0C0C0',
                'gallery-darker': '#A0A0A0',
                'gallery-darkest': '#606060',

                'white': '#FFFFFF',
            },
        },
    },
    plugins: [forms],
};
