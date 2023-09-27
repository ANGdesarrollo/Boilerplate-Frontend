import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm':'640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px'
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-light': '#F2F1F1',
      'secondary' : '#FFAB09',
      'white': '#FFFFFF',
      'primary': '#DB3026',
      'font':'#423C3C',
      'accent':'#EDC73F',
      'gray-dark':'#666666',
      'cards':'#929292'

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      amatic:['var(--font-amatic)'],
      poppins:[ 'var(--font-poppins)']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }

  },
  plugins: [],
}
export default config
