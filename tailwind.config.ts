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
        surfacePage: '#ffffff',
        surfaceMuted: '#F3F4F1',
        surfaceMutedSoft: '#E8EBED',
        surfaceMutedCool: '#ECEFF1',
      },
      fontFamily: {
        sans: [
          'var(--font-dm-sans)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.55s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
