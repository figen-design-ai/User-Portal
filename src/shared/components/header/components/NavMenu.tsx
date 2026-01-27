'use client'

import React from 'react'
import { Link } from '@/i18n/routing'
import { cn } from '@/shared/utils'
import type { HeaderActiveKey } from '../types'

export interface NavMenuProps {
	activeKey?: HeaderActiveKey
	items: { key: HeaderActiveKey; href: string; label: string }[]
}

export const NavMenu: React.FC<NavMenuProps> = ({ activeKey, items }) => (
	<nav
		className="hidden md:flex items-center justify-center gap-6 flex-1"
		aria-label="Main navigation"
	>
		{items.map(({ key, href, label }) => {
			const isActive = activeKey === key
			return (
				<Link
					key={key}
					href={href}
					className={cn(
						'text-body font-normal leading-none text-black-dark transition-colors hover:text-pink-600 pb-1 border-b-2 border-transparent -mb-px',
						isActive && 'border-b-2 border-pink-600 text-pink-600',
						!isActive && 'hover:border-pink-600'
					)}
				>
					{label}
				</Link>
			)
		})}
	</nav>
)
