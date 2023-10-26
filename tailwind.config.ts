import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#06030F",
        darkGray: "#171320",
        green: "#77BE1D",
        red: "#FF4C00",
        blue: "#366EDC",
        darkBlue: "#090613",
        darkPurple: "#13101B",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
