/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                "95%": "95%",
            },
            minWidth: {
                "95%": "95%",
            },
            spacing: {
                128: "32rem",
            },
            colors: {
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
                tertiary: "var(--tertiary-color)",
                accent: {
                    1: "var(--accent-color-1)",
                },
                borderColor: "var(--border-color)",
                textLight: "var(--text-color-light)",
                textDark: "var(--text-color-dark)",
            },
            boxShadow: {
                outer: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
