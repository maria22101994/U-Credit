/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        xxl: { min: "1440px", max: "1535px" }, // 1440px ≤ xxl < 1536px
      },
    },
  },
  plugins: [],
};
