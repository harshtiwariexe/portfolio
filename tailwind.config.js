/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blur-color": "rgba(63, 119, 189, 0.2)",
        glass: "rgba(255,255,255,0.50)",
        darkk: "rgba(255,255,255,0.50)",
      },
    },
  },
  plugins: [],
};
