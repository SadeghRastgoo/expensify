/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Vazirmatn", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "#121212",
        "secondary-dark": "#1e1e1e",
        "primary-light": "#fff",
        "secondary-light": "#feffff",
      },
      backgroundImage: {
        "header-bg-1": "url('/src/assets/header-background/header-bg-1.jpg')",
        "header-bg-2": "url('/src/assets/header-background/header-bg-2.jpg')",
        "header-bg-3": "url('/src/assets/header-background/header-bg-3.jpg')",
        "header-bg-4": "url('/src/assets/header-background/header-bg-4.jpg')",
        "header-bg-5": "url('/src/assets/header-background/header-bg-5.jpg')",
        "header-bg-6": "url('/src/assets/header-background/header-bg-6.jpg')",
        "header-bg-7": "url('/src/assets/header-background/header-bg-7.jpg')",
      },
    },
  },
  plugins: [],
};
