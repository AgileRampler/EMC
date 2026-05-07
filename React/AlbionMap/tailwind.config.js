export default {
  content: [
<<<<<<< HEAD
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
=======
    "./index.html",              // ✅ ADD THIS - Important for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ FIXED - Added jsx/tsx extensions
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" // ✅ FIXED - Correct path with forward slashes
  ],
  theme: {
    extend: {
      fontFamily: {
        opens: ["Open Sans", "sans-serif"], // ✅ FIXED - Typo: "sans-seri" → "sans-serif"
      }
    },
  },
  plugins: [flowbiteReact],
}
>>>>>>> c34faffbe67ff2076b1cd23da5e5e1cb1bdb2554
