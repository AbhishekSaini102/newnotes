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
        "custom-gray": "#333333",
        "custom-black": "#444444",
        "custom-stone": "#777777",
        "custom-stone-light": "#999999",
        "newnotes-sidebar-light": "#f9f9f9",
        "newnotes-sidebar-dark": "#222222",
        "apple-notes-sidebar-light": "#f2f2f7",
        "custom-light-gray": "##f5f5f5",
        "custom-light-gray-hover": "#e0e0e0",
        "newNote-sidebar": "rgb(245, 245, 247);",
        "custom-white": "#fff",
        // "new-custom-color": "#f8f9fa",
        // "new-custom-color": "#e9ecef",
      },
      spacing: {
        custom: "1380px",
      },
      height: {
        custom: "92%",
      },
      transitionDuration: {
        700: "700ms",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      width: {
        "custom-width": "16.25rem",
        "custom-width-second": "15.75rem",
        "custom-width-full": "26rem",
      },
    },
  },
  plugins: [],
};
























