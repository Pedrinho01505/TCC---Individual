/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      medidas: {
        largura: '23.8125rem',
        '128': '8rem',
      }
    },
    colors: {
      'bgcaixa': '#87BFDD',
      'fundosite': '#EDEEEF',
      'titulo': '#216487',
      'text': '#3f4249'
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif']
    },
    borderRadius: {
      custom: '1.188rem',
    },
    margin: {
      box: '1.75rem',
      top: '3rem',
      bottom: '2rem',
      inline: '1.5rem'
    },
    padding: {
      bottom: '.8rem',
      top: '.8rem', 
      inline: '1rem',
      desk: '1.5rem'
    },
    custom: {
      with: '50rem',
      max: '50rem'
    }
  },
  plugins: [],
}