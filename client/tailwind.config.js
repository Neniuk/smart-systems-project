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
        },
    },
    plugins: [],
};
