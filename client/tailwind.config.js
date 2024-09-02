/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        "custom-blue": "#1DA1F2",
        "custom-red": "#E0245E",
        // "custom-white": "#F5F8FA",
      },
      spacing: {
        custom: "1380px",
      },
    },
  },
  plugins: [],
};




