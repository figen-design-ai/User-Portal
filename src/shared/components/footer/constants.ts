import facebookIcon from '@/assets/shared/icon-facebook-black.svg'
import xIcon from '@/assets/shared/icon-x-black.svg'
import vimeoIcon from '@/assets/shared/icon-vimeo-black.svg'
import youtubeIcon from '@/assets/shared/icon-youtube-black.svg'
import bottomBg from '@/assets/shared/bottom-bg.png'

export const FOOTER_SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/', icon: facebookIcon, label: 'Facebook' },
  { href: 'https://x.com/', icon: xIcon, label: 'X' },
  { href: 'https://vimeo.com/', icon: vimeoIcon, label: 'Vimeo' },
  { href: 'https://www.youtube.com/', icon: youtubeIcon, label: 'YouTube' },
] as const

export const bottomBgImage = bottomBg
