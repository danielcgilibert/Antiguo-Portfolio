/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        yellow: '#00A1FF',
        dark: '#222831',
        dark2: '#303740',
        gray: '#FBFBFB',
        gradient1: '#fbc2eb',
        gradient2: '#a18cd1',
      },
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      title: ['Roboto'],
    },
  },
  plugins: [],
}
