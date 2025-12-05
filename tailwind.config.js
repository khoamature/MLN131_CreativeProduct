/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        sway: {
          "0%, 100%": { transform: "translateY(0px) rotate(-5deg)" },
          "50%": { transform: "translateY(-15px) rotate(5deg)" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        sway: "sway 3s ease-in-out infinite",
        sway_reverse: "sway 3s ease-in-out infinite reverse",
        wave: "wave 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
