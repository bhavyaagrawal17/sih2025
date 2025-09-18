/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#0ea5e9",
					light: "#38bdf8",
					dark: "#0284c7",
				},
			},
			boxShadow: {
				soft: "0 10px 25px -10px rgba(0,0,0,0.1)",
			},
		},
	},
	plugins: [],
};


