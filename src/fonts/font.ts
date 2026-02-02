import { Inter, Noto_Sans } from 'next/font/google'

export const notoSansFont = Noto_Sans({
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--noto-sans-font',
  fallback: ['Noto Sans', 'sans-serif'],
})

export const interFont = Inter({
  weight: ['600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--inter-font',
  fallback: ['Inter', 'sans-serif'],
})
