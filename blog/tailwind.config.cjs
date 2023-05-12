/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'body': ['"Noto Sans JP"', '"Helvetica Neue"', 'Arial', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', '"BIZ UDPGothic"', 'Meiryo', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
