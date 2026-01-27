'use client'

import React from 'react'
import { usePathname } from '@/i18n/routing'
import { useAppDispatch } from '@/config/store'
import { openModal } from '@/features/auth/hooks'
import { Header } from '@/shared/components/header'
import { Footer } from '@/shared/components/footer'
import type { HeaderActiveKey } from '@/shared/components/header'

const PATHNAME_TO_ACTIVE_KEY: Record<string, HeaderActiveKey> = {
	'/': 'home',
	'/pricing': 'pricing',
	'/about': 'about',
	'/contact': 'contact',
}

export interface MainLayoutProps {
	children: React.ReactNode
	onSubscribe?: (email: string) => void
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	onSubscribe,
}) => {
	const pathname = usePathname()
	const dispatch = useAppDispatch()

	const activeKey = PATHNAME_TO_ACTIVE_KEY[pathname] ?? undefined

	const handleLoginClick = () => {
		dispatch(openModal('login'))
	}

	return (
		<div className="min-h-screen bg-transparent flex flex-col">
			<Header activeKey={activeKey} onLoginClick={handleLoginClick} />
			<main className="flex-1" role="main">
				{children}
			</main>
			<Footer onSubscribe={onSubscribe} />
		</div>
	)
}
