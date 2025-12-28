import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1120',
        accent: '#6b5bff',
        sunrise: '#ff8a5c'
      },
      fontFamily: {
        display: ['var(--font-sans)']
      }
    }
  },
  plugins: []
};

export default config;
