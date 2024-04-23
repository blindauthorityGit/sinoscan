/** @type {import('tailwindcss').Config} */
// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                ...fontFamily,
                ueber: ["Ultra", "serif"],
                sans: ["Open Sans", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#002A3A",
                    50: "#fdf2f9",
                    100: "#fde6f4",
                    200: "#fcceeb",
                    300: "#fba6d9",
                    400: "#f86ebe",
                    500: "#f143a3",
                    600: "#e22e88",
                    700: "#c31366",
                    800: "#a11354",
                    900: "#861548",
                    950: "#520528",
                },
                mediumGray: "#D9D9D9",
                lightGray: "#F6F6F6",
                green: "#5D9732",
            },
        },
    },
    plugins: [],
};
