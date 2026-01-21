import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				black: {
					DEFAULT: '#000000',
					'75': '#000000BF',
					'60': '#00000099',
					'20': '#00000033',
					dark: '#1F2024',
				},
				gray: {
					DEFAULT: '#D9D9D9',
					'30': '#0000004D',
					wash: '#D9D9D933',
					light: '#D9D9D9',
				},
				pink: {
					light: '#FBDEF5',
					DEFAULT: '#F6CCCC',
					medium: '#F0A3A3',
					bright: '#FFC9C9',
				},
				green: {
					DEFAULT: '#34C759',
					light: '#B9F8CF',
					dark: '#016630',
					bright: '#00B445',
				},
				red: {
					DEFAULT: '#E43B3B',
				},
				purple: {
					light: '#9747FF1A',
					DEFAULT: '#9747FF',
				},
				blue: {
					DEFAULT: '#0088FF',
					light: '#C6E0F8',
					pale: '#EFF6FF',
				},
				yellow: {
					DEFAULT: '#FFF085',
				},
				brown: {
					DEFAULT: '#9F0712',
					dark: '#894B00',
				},
				primary: {
					pink: '#FBDEF5',
					gradient: {
						start: '#EC4899',
						end: '#F97316',
					},
				},
			},
			fontFamily: {
				'young-serif': ['Young Serif', 'serif'],
				inter: ['Inter', 'sans-serif'],
				'noto-serif-gujarati': ['Noto Serif Gujarati', 'serif'],
				sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
			},
			fontWeight: {
				normal: '400',
				medium: '500',
				bold: '700',
			},
		},
	},
	plugins: [],
}
export default config
