/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagen1': "url('/images/soleado.jpg')",
        
        'imagen2': "url('/images/llubia.jpg')",
        
        'imagen3': "url('/images/nubado.jpg')",
        
        'imagen4': "url('/images/	nieve.jpg')",
        
        'imagen5': "url('/images/tormenta.jpg')",
        
        'imagen6': "url('/images/viento.jpg')",

        
        'footer-texture': "url('/img/footer-texture.png')",
      },
      
      
      

      fontFamily:{
        "principal-font":['Lato', "sans-serif"]
      }
    },
  },
  plugins: [],
}

