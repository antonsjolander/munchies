import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontSize: {
				display: "2.5rem",
				h1: "1.5rem",
				h1md: "1.25rem",
				title: "0.875rem",
				body: "0.75rem",
			},
			colors: {
				offwhite: "#FAFAFA",
				green: "#00703A",
				stroke: "rgba(0,0,0,0.1)",
			},
			gridTemplateColumns: {
				3: "repeat(3, minmax(auto, 327px));",
			},
			screens: {
				"2xl": "1440px",
			},
		},
	},
	plugins: [],
};
export default config;
