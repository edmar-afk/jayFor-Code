/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			animation: {
				spin: "spin 5s linear infinite",
				pulse: "pulse 1s linear infinite",
				fade: "fadeIn .5s ease-in-out",
				fadeOut: "fadeOut .5s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				fadeOut: {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
			},
		},
	},

	plugins: [],
};
