/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-soft": "#a5b4fc",
        "primary-dark": "#4338ca",
      },
    },
  },
  plugins: [],
};
