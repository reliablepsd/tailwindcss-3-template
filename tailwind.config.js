module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			lg: { max: "1024" },
			md: { max: "768px" },
			sm: { max: "468px" },
		},
		colors: {
			inherit: "inherit",
			current: "currentColor",
			transparent: "transparent",
			black: "#000000",
			white: "#ffffff",
			gray: {
				300: "#f7fafc",
				600: "#244000",
				900: "#1a202c",
			},
			red: "#ff0000",
			green: "#008000",
			blue: "#0000FF",
		},
		extend: {
			spacing: {
				100: "100px",
			},
		},
	},
	plugins: []
};
