/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.html",
        "./static/src/**/*.js,*.css",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Plus Jakarta Sans', 'Sans-serif']
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/forms'),
    ],
}