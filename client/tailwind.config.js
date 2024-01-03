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
                "primary-transparent": "rgba(18, 52, 86, 0.8)", // Key is now a string
                "light-blue-transparent": "rgba (0, 128, 255, 0.616)",
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
                tertiary: "var(--tertiary-color)",
                accent: {
                    1: "var(--accent-color-1)",
                },
                borderColor: "var(--border-color)",
                textLight: "var(--text-light)",
                textLightSecondary: "var(--text-light-secondary)",
                textDark: "var(--text-dark)",
                textDarkSecondary: "var(--text-dark-secondary)",
                backgroundPrimary: "var(--background-primary)",
                backgroundSecondary: "var(--background-secondary)",
                mainCardPrimary: "var(--main-card-primary)",
                mainCardSecondary: "var(--main-card-secondary)",
                secondaryCardPrimary: "var(--secondary-card-primary)",
                secondaryCardSecondary: "var(--secondary-card-secondary)",
            },
            boxShadow: {
                outer: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
