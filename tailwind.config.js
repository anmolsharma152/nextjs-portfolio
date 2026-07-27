/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border-h, 0) var(--border-s, 0%) var(--border-l, 0%))',
        input: 'hsl(var(--input-h, 0) var(--input-s, 0%) var(--input-l, 0%))',
        ring: 'hsl(var(--ring-h, 0) var(--ring-s, 0%) var(--ring-l, 0%))',
        background: 'hsl(var(--background-h, 0) var(--background-s, 0%) var(--background-l, 0%))',
        foreground: 'hsl(var(--foreground-h, 0) var(--foreground-s, 0%) var(--foreground-l, 0%))',
        primary: {
          DEFAULT: 'hsl(var(--primary-h, 0) var(--primary-s, 0%) var(--primary-l, 0%))',
          foreground:
            'hsl(var(--primary-foreground-h, 0) var(--primary-foreground-s, 0%) var(--primary-foreground-l, 0%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-h, 0) var(--secondary-s, 0%) var(--secondary-l, 0%))',
          foreground:
            'hsl(var(--secondary-foreground-h, 0) var(--secondary-foreground-s, 0%) var(--secondary-foreground-l, 0%))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive-h, 0) var(--destructive-s, 0%) var(--destructive-l, 0%))',
          foreground:
            'hsl(var(--destructive-foreground-h, 0) var(--destructive-foreground-s, 0%) var(--destructive-foreground-l, 0%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-h, 0) var(--muted-s, 0%) var(--muted-l, 0%))',
          foreground:
            'hsl(var(--muted-foreground-h, 0) var(--muted-foreground-s, 0%) var(--muted-foreground-l, 0%))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-h, 0) var(--accent-s, 0%) var(--accent-l, 0%))',
          foreground:
            'hsl(var(--accent-foreground-h, 0) var(--accent-foreground-s, 0%) var(--accent-foreground-l, 0%))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover-h, 0) var(--popover-s, 0%) var(--popover-l, 0%))',
          foreground:
            'hsl(var(--popover-foreground-h, 0) var(--popover-foreground-s, 0%) var(--popover-foreground-l, 0%))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
        'slide-out-to-top': 'slide-out-to-top 0.3s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
        'slide-out-to-bottom': 'slide-out-to-bottom 0.3s ease-out',
      },
      card: {
        DEFAULT: 'hsl(var(--card-h, 0) var(--card-s, 0%) var(--card-l, 0%))',
        foreground:
          'hsl(var(--card-foreground-h, 0) var(--card-foreground-s, 0%) var(--card-foreground-l, 0%))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-jakarta)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
