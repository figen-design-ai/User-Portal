import { Inter, Nunito } from 'next/font/google'

export const nunitoFont = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--nunito-font',
  fallback: ['Nunito', 'sans-serif'],
})

export const interFont = Inter({
  weight: ['400', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--inter-font',
  fallback: ['Inter', 'sans-serif'],
})
