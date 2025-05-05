/** @type {import('tailwindcss').Config} */
// tailwind 4.x버전은 init 명령어가 사라져서 직접 만들어야함

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 0.4s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  
  