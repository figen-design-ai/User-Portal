export type HeaderActiveKey = 'home' | 'pricing' | 'about' | 'contact'

export interface HeaderProps {
  activeKey?: HeaderActiveKey
  onLoginClick?: () => void
}

export interface HeaderNavItem {
  key: HeaderActiveKey
  href: string
  labelKey: string
}
