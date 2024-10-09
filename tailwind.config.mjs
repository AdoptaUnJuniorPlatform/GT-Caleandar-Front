/** @type {import('tailwindcss').Config} */
export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
	theme: {
		extend: {
      colors:{
        bg_primary:'#287D88',
        bg_secondary:'#FEFEFE'
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}
