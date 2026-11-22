import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Samsung India palette: pure black / white / neutral greys + Samsung blue
        navy: {
          50: '#F4F4F4', 100: '#E5E5E5', 200: '#CCCCCC', 300: '#999999',
          400: '#666666', 500: '#4D4D4D', 600: '#333333', 700: '#222222',
          800: '#111111', 900: '#0A0A0A', 950: '#000000',
        },
        charcoal: {
          50: '#F7F7F7', 100: '#F4F4F4', 200: '#E5E5E5', 300: '#CCCCCC',
          400: '#999999', 500: '#6B6B6B', 600: '#4D4D4D', 700: '#333333',
          800: '#1A1A1A', 900: '#0F0F0F', 950: '#000000',
        },
        // Neutral (non-blue-tinted) greys replace Tailwind's default slate
        slate: {
          50: '#F7F7F7', 100: '#F4F4F4', 200: '#E5E5E5', 300: '#CCCCCC',
          400: '#999999', 500: '#6B6B6B', 600: '#595959', 700: '#404040',
          800: '#1A1A1A', 900: '#000000', 950: '#000000',
        },
        // Samsung blue (#1428A0)
        accent: {
          DEFAULT: '#1428A0',
          50: '#EEF0FA', 100: '#DCE0F4', 200: '#BAC1EA', 300: '#8D99DC',
          400: '#5667CC', 500: '#2338B8', 600: '#1428A0', 700: '#101F80',
          800: '#0C1766', 900: '#080F45',
        },
        blue: {
          50: '#EEF0FA', 100: '#DCE0F4', 200: '#BAC1EA', 300: '#8D99DC',
          400: '#5667CC', 500: '#2338B8', 600: '#1428A0', 700: '#101F80',
          800: '#0C1766', 900: '#080F45',
        },
      },
      fontFamily: {
        sans: ['SamsungOne', 'SamsungSharpSans', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
