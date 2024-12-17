import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#ffffff', // Fondo claro
        'text-light': '#121212', // Texto claro
        'secondary-text-light': '#4d4d4d', // Texto secundario claro
        'primary-light': '#ff007a', // Rosa neón
        'primary-light-light': '#ff57a3', // Rosa suave
        'secondary-light': '#00d1ff', // Cian vibrante
        'accent-light': '#ffc700', // Amarillo neón
        'border-light': '#e0e0e0', // Bordes claros
        'bg-muted-light': '#f7f7f7', // Fondo de secciones claras
        'input-bg-light': '#ffffff', // Fondo de inputs claros

        // Colores para el modo oscuro
        'bg-dark': '#121212', // Fondo oscuro
        'text-dark': '#ffffff', // Texto oscuro
        'secondary-text-dark': '#bbbbbb', // Texto secundario oscuro
        'primary-dark': '#ff57a3', // Rosa neón suave
        'primary-dark-light': '#ff85bc', // Rosa pastel
        'secondary-dark': '#00bfff', // Cian más oscuro
        'accent-dark': '#ffdd33', // Amarillo suave
        'border-dark': '#333333', // Bordes oscuros
        'bg-muted-dark': '#1e1e1e', // Fondo de secciones oscuras
        'input-bg-dark': '#222222', // Fondo de inputs oscuros
      },
    },
  },
  plugins: [],
} satisfies Config;
