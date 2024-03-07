/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titilliumweb': ['var(--titilliumweb)', 'sans-serif']
      },
      colors: {
        primary: '#7ED32D',
        'light-green': '#7ED32D',
        basecolor: '#6D6461',
        'dark-1': '#333333',
        'dark-2': '#26272B',
        'gray-1' : '#E2E2E2',
        'gray-2' : '#CCC9C8',
        'gray-3' : '#F5F5F5'
      },
      boxShadow: {
        'custom-1': '0 0 4px 0 rgba(0, 0, 0, 0.05)',
      }
    },
   
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1360px',
      '3xl': '1560px',

      'max-3xl': {'max': '1559px'},
      'max-2xl': {'max': '1359px'},
      'max-xl': {'max': '1199px'},
      'max-lg': {'max': '1023px'},
      'max-md': {'max': '767px'},
      'max-sm': {'max': '575px'},
    },
    container: {
        padding: {
            DEFAULT: '15px',
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl': '1360px',
        },
    },
    fontSize: {
      'font-12': ['0.75rem', {
        lineHeight: '1.55',
      }],
      'font-14': ['0.875rem', {
        lineHeight: '1.55',
      }],
      'font-16': ['1rem', {
        lineHeight: '1.55',
      }],
      'font-18': ['1.125rem', {
        lineHeight: '1.55',
      }],
      'font-20': ['1.25rem', {
        lineHeight: '1.5',
      }],
      'font-22': ['1.375rem', {
        lineHeight: '1.5',
      }],
      'font-24': ['1.5rem', {
        lineHeight: '1.3',
      }],
      'font-26': ['1.625rem', {
        lineHeight: '1.2',
      }],
      'font-28': ['1.75rem', {
        lineHeight: '1.2',
      }],
      'font-30': ['1.875rem', {
        lineHeight: '1.2',
      }],
      'font-32': ['2rem', {
        lineHeight: '1.2',
      }],
      'font-34': ['2.125rem', {
        lineHeight: '1.2',
      }],
      'font-36': ['2.25rem', {
        lineHeight: '1.2',
      }],
      'font-38': ['2.375rem', {
        lineHeight: '1.2',
      }],
      'font-40': ['2.5rem', {
        lineHeight: '1.2',
      }],
      'font-44': ['2.75rem', {
        lineHeight: '1.2',
      }],
      'font-48': ['3rem', {
        lineHeight: '1.2',
      }],
      'font-52': ['3.25rem', {
        lineHeight: '1.2',
      }],
    }, 
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'custom': '5px',
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
