import type { HeaderActiveKey } from './types'
import instagramIcon from '@/assets/shared/icon-instagram-pink.svg'
import facebookIcon from '@/assets/shared/icon-facebook-pink.svg'
import googleIcon from '@/assets/shared/icon-google-pink.svg'
import xIcon from '@/assets/shared/icon-x-pink.svg'

export const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/',
    icon: instagramIcon,
    label: 'Instagram',
  },
  { href: 'https://www.facebook.com/', icon: facebookIcon, label: 'Facebook' },
  { href: 'https://www.google.com/', icon: googleIcon, label: 'Google' },
  { href: 'https://x.com/', icon: xIcon, label: 'X' },
] as const

export const NAV_ITEMS: {
  key: HeaderActiveKey
  href: string
  labelKey: string
}[] = [
  { key: 'home', href: '/', labelKey: 'navHome' },
  { key: 'pricing', href: '#pricing', labelKey: 'navPricing' },
  { key: 'about', href: '/about-us', labelKey: 'aboutUs' },
  { key: 'contact', href: '/contact', labelKey: 'contactUs' },
]
