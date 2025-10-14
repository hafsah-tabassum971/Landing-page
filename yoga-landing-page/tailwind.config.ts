/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      keyframes: {
        imageLoad: {
          from: { opacity: '0', filter: 'blur(10px)', transform: 'scale(1.05)' },
          to: { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' },
        },
      },
      animation: {
        imageLoad: 'imageLoad 0.8s ease forwards',
      },
    },
    
  },
  
  plugins: [],
};
