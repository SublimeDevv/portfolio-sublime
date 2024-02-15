/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hack: ["Hack Nerd Font"],
        sans: ["Inter var", "system-ui", "sans-serif"],
      },
    },
  },

  safelist: [
    "hover:text-green-500",
    "hover:text-orange-500",
    "hover:text-blue-800",
    "hover:text-red-500",
    "hover:text-blue-400",
    "hover:text-blue-700",
    "hover:text-green-700",
    "hover:text-yellow-500",
    "hover:text-purple-500",
    "hover:text-blue-900",
    "hover:text-white",
    "hover:text-green-600",
    "hover:text-red-300",
    "hover:text-green-300",
    "hover:text-blue-500",
    "hover:text-orange-500", 
    "hover:text-blue-400", 
    "hover:text-blue-800", 
    "hover:text-purple-500", 
    "hover:text-red-500", 
    "hover:text-red-400",   
    "hover:text-green-600", 
    "hover:text-red-300", 
    "hover:text-green-300", 
    "hover:text-cyan-400",
    "hover:text-green-500", 
  ],
  plugins: [],
};
