/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'background-black': '#10141E',
        'background-light-black': '#161D2F',
        'text-red': '#FC4747',
        'custom-border-color': '#5A698F',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      border: {
        'border-bottom': '1px solid #5A698F',
        'border-bottom-error': '1px solid #FC4747',
      },
      gridTemplateColumns: {
        'custom-cols': '24% 24% 24% 24%',
      },
    },
  },
  plugins: [],
};
