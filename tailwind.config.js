/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/components/*.jsx", "./src/pages/*.jsx", "./index.html"],
  theme: {
		extend: {
			colors: {
				"d-bgc": "#17181C",
				"d-primary": "#1E1F24",
				"d-secondary": "#27292F",
				"d-accent": "#2A86FE",
				"d-text": "#D6D7D8",
			},
			fontFamily: {
				poppins: "Poppins",
				"open-sans": ['"Open Sans"'],
			},
			animation: {
				"spin-slow": "spin 60s linear infinite",
				"bounce-slow": "bounce 5s ease-in-out infinite",
			},
		},
		
	},
  plugins: [],
}

