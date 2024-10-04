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
            patterns: {
                opacity: {
                    100: "1",
                    80: ".80",
                    60: ".60",
                    40: ".40",
                    20: ".20",
                    10: ".10",
                    5: ".05",
                },
                size: {
                    1: "0.25rem",
                    2: "0.5rem",
                    4: "1rem",
                    6: "1.5rem",
                    8: "2rem",
                    16: "4rem",
                    20: "5rem",
                    24: "6rem",
                    32: "8rem",
                },
            },
            boxShadow: {
                "solid-lg": "20px 20px 0 0 rgba(0, 0, 0, 0.6)",
                "solid-sm": "5px 5px 0 0 rgba(0, 0, 0, 0.6)",
            },
            borderWidth: {
                14: "14px",
            },
        },
    },
    plugins: [
        require("tailwindcss-opentype"),
        require("tailwindcss-react-aria-components"),
        require("tailwindcss-bg-patterns"),
    ],
};
export default config;
