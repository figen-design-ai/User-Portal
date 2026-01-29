'use client'

import React from 'react'
import { Link } from '@/i18n/routing'

export interface AuthButtonsProps {
	label: string
	onLoginClick?: () => void
}

const linkClassName =
	'text-default font-normal leading-none text-black-dark hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 rounded px-1 py-2'

export const AuthButtons: React.FC<AuthButtonsProps> = ({
	label,
	onLoginClick,
}) => {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			onLoginClick?.()
		}
	}

	return (
		<div className="shrink-0 flex items-center">
			{onLoginClick ? (
				<button
					type="button"
					onClick={onLoginClick}
					onKeyDown={handleKeyDown}
					className={linkClassName}
					tabIndex={0}
					aria-label={label}
				>
					{label}
				</button>
			) : (
				<Link href="#login" className={linkClassName} aria-label={label}>
					{label}
				</Link>
			)}
		</div>
	)
}
