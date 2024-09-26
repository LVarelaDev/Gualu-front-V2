import localFont from 'next/font/local'

export const poppins = localFont({
	src: [
		{
			path: '../assets/fonts/poppins-400-normal.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/poppins-500-medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/poppins-600-semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/poppins-700-bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../assets/fonts/poppins-800-extrabold.woff2',
			weight: '800',
			style: 'normal',
		},
	],
	fallback: ['sans serif'],
	preload: true,
})
