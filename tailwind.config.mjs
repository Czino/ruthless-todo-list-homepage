/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        main: '#dc5616',
        light: {
          1: '#fdf2e9',
          2: '#fae0c7',
          3: '#f7bf91',
          4: '#f29452',
          5: '#ec6d23',
        },
        dark: {
          1: '#be3b10',
          2: '#982510',
          3: '#7e2015',
          4: '#6b1b18',
          5: '#400f0f',
        },
        warn: {
          1: '#F4F1BB',
        },
        error: {
          1: '#fff1f2',
          2: '#f43f5e',
          3: '#e11d48',
        },
      },
    },
  },
  plugins: [],
};
