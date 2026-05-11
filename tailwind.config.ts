import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ababTeal: '#4ECDC4',
        ababRed: '#FE6D73',
        ababYellow: '#FFE66D',
        ababMint: '#F1F5EF',
      },
    },
  },
  plugins: [],
}

export default config
