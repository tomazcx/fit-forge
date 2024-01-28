/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {},
    plugins: [
        require("daisyui")
    ],
    daisyui: {
        themes: [
            {
                lemonade: {
                    ...require("daisyui/src/theming/themes")["light"],
                    secondary: "#001110",
                }
            },
        ],
    }
}

