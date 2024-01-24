/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				spin: "spin 5s linear infinite",
				pulse: "pulse 1s linear infinite",
			},
		},
	},

	plugins: [],
};
