import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: {
          DEFAULT: '#000000',
          '75': '#000000BF',
          '60': '#00000099',
          '20': '#00000033',
          dark: '#1F2024',
        },
        gray: {
          DEFAULT: '#D9D9D9',
          '30': '#0000004D',
          wash: '#D9D9D933',
          light: '#D9D9D9',
          '50': '#D6D7D9',
          '100': '#B8BBBF',
          '200': '#898F98',
          '300': '#484D57',
          '400': '#2E323A',
          '500': '#1A1C21',
        },
        pink: {
          '100': '#FFE4EB',
          '200': '#FFCEDA',
          '300': '#FFACC1',
          '400': '#FF81A1',
          '500': '#FF527E',
          '600': '#FF2E63',
          '700': '#D91A4A',
        },
        green: {
          DEFAULT: '#34C759',
          light: '#B9F8CF',
          dark: '#016630',
          bright: '#00B445',
          '50': '#EAFFD8',
          '100': '#ABEB68',
          '200': '#85C83E',
          '300': '#69B518',
          '400': '#417B03',
          '500': '#324C16',
          '600': '#21330F',
          '700': '#111907',
        },
        red: {
          DEFAULT: '#E43B3B',
        },
        purple: {
          light: '#9747FF1A',
          DEFAULT: '#9747FF',
        },
        blue: {
          DEFAULT: '#0088FF',
          light: '#C6E0F8',
          pale: '#EFF6FF',
        },
        yellow: {
          DEFAULT: '#FFF085',
        },
        brown: {
          DEFAULT: '#9F0712',
          dark: '#894B00',
        },
        primary: {
          pink: '#FBDEF5',
          gradient: {
            start: '#EC4899',
            end: '#F97316',
          },
        },
        system: {
          black: '#1F2227',
          white: '#FFFFFF',
          bg: '#EDEEEF',
          success: '#85C83E',
          error: '#E62D2D',
          validation: '#FFD748',
        },
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(180deg, #fff5f7 0%, #fff5f7 33.33%, #ffffff 66.67%)',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
      },
      fontFamily: {
        nunito: ['var(--nunito-font)'],
        kleeOne: ['var(--klee-one-font)', 'Klee One', 'serif'],
      },
      fontSize: {
        'h-1': [
          '3.5rem', //56
          {
            lineHeight: '1.2',
          },
        ],
        'h-2': [
          '2.5rem', //40
          {
            lineHeight: '1.2',
          },
        ],
        'h-3': [
          '2rem', //32
          {
            lineHeight: '1.2',
          },
        ],
        'h-4': [
          '1.75rem', //28
          {
            lineHeight: '1.2',
          },
        ],
        'h-5': [
          '1.5rem', //24
          {
            lineHeight: '1.2',
          },
        ],
        default: [
          '1.25rem', //20
          {
            lineHeight: '1.2',
          },
        ],
        body: [
          '1.125rem', //18
          {
            lineHeight: '1.2',
          },
        ],
        logo: [
          '3rem', // 48
          {
            lineHeight: '1.2',
          },
        ],
        small: [
          '1rem', //16
          {
            lineHeight: '1.2',
          },
        ],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
}
export default config
