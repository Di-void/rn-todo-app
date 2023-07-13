/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-violet": "hsl(235, 21%, 11%)",
        "gradient-1": "hsl(192, 100%, 67%)",
        "gradient-2": "hsl(280, 87%, 65%)",
        "element-violet": "hsl(235, 24%, 19%)",
        "element-violet-2": "hsl(237, 14%, 26%)",
        "active-blue": "hsl(220, 98%, 61%)",
        "shadow-color": "hsl(235, 24%, 19%)",
      },
    },
  },
  plugins: [],
};
