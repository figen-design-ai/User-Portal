'use client'

import React from 'react'
import type { HeaderProps } from './types'
import { useHeaderContent } from './hooks/useHeaderContent'
import { Logo } from './components/Logo'
import { NavMenu } from './components/NavMenu'
import { SocialBar } from './components/SocialBar'
import { AuthButtons } from './components/AuthButtons'

export const Header: React.FC<HeaderProps> = ({ activeKey, onLoginClick }) => {
	const { navItems, loginSignupLabel } = useHeaderContent()

	return (
		<header className="w-full bg-white" role="banner">
			<SocialBar />
			<div className="border-b border-gray" aria-hidden />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-104 gap-4">
					<Logo />
					<NavMenu activeKey={activeKey} items={navItems} />
					<AuthButtons label={loginSignupLabel} onLoginClick={onLoginClick} />
				</div>
			</div>
		</header>
	)
}
