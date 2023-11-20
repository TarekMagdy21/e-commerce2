/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        chair: "url('/src/assets/background_chair.jpg')",
        mobilechair: "url('/src/assets/mobileSVG.svg')",
      }),
    },
    fontFamily: {
      poppins: "Poppins",
    },
  },
  plugins: [],
};
