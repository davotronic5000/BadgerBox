import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
                title: ["var(--font-bungee)", "ui-sans-serif", "Georgia"],
                content: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [
        require("tailwindcss-opentype"),
        require("tailwindcss-react-aria-components"),
    ],
};
export default config;
