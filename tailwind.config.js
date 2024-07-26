/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            customRed: '#DB4444',
          },
          fontFamily: {
            sans: ['Noto Sans', 'sans-serif'],
          },
        },
      },
    plugins: [],
  }