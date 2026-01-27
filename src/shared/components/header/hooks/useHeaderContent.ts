'use client'

import { useTranslations } from 'next-intl'
import { NAV_ITEMS } from '../constants'
import type { HeaderActiveKey } from '../types'

export interface NavItemWithLabel {
	key: HeaderActiveKey
	href: string
	label: string
}

export interface UseHeaderContentReturn {
	navItems: NavItemWithLabel[]
	loginSignupLabel: string
}

export const useHeaderContent = (): UseHeaderContentReturn => {
	const t = useTranslations('common')
	const navItems: NavItemWithLabel[] = NAV_ITEMS.map(item => ({
		...item,
		label: t(item.labelKey),
	}))
	return { navItems, loginSignupLabel: t('loginSignup') }
}
