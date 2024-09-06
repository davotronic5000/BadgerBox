/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    plugins: [
        "prettier-plugin-organize-imports",
        "prettier-plugin-tailwindcss",
    ],
    tailwindFunctions: ["tw"],
};

module.exports = config;
