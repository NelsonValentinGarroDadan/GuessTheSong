/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-dark': '#121212', // Fondo oscuro
        'text-dark': '#ffffff', // Texto oscuro
        'secondary-text-dark': '#bbbbbb', // Texto secundario oscuro
        'primary-dark': '#ff57a3', // Rosa neón suave
        'primary-dark-light': '#ff85bc', // Rosa pastel
        'secondary-dark': '#00bfff', // Cian más oscuro
        'accent-dark': '#ffdd33', // Amarillo suave
        'border-dark': '#333333', // Bordes oscuros
        'bg-muted-dark': '#1e1e1e', // Fondo de secciones oscuras
        'input-bg-dark': '#222222'},
    },
  },
  plugins: [],
}

