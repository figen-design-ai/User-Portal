'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SearchBar, Button } from '@/shared/view'
import { useAppDispatch } from '@/config/store'
import { openModal } from '@/features/auth/hooks'
import iconHeader from '@/assets/feature/home/icon_header.png'

export const Header: React.FC = () => {
	const t = useTranslations('common')
	const dispatch = useAppDispatch()

	const handleLoginClick = () => {
		dispatch(openModal('login'))
	}

	return (
		<header className="w-full h-130 bg-white border-b border-gray">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-2">
						<span className="text-5xl font-normal leading-none tracking-[0.05em] text-center align-middle text-black-dark">
							FiGen
						</span>
						<Image
							src={iconHeader}
							alt="Icon Header"
							width={64}
							height={64}
							className="w-16 h-16"
						/>
					</div>
					<nav className="hidden md:flex items-center gap-6">
						<a
							href="#contact"
							className="text-default font-normal leading-none tracking-normal text-center align-middle text-black-dark hover:text-primary-gradient-start transition-colors"
						>
							{t('contactUs')}
						</a>

						<a
							href="#contact"
							className="text-default font-normal leading-none tracking-normal text-center align-middle text-black-dark hover:text-primary-gradient-start transition-colors"
						>
							{t('aboutUs')}
						</a>
					</nav>

					<div className="flex items-center gap-4 flex-1 justify-end max-w-md">
						<div className="hidden sm:block flex-1 max-w-xs">
							<SearchBar placeholder={t('searchTemplate')} />
						</div>
						<Button variant="secondary" onClick={handleLoginClick}>
							{t('login')}
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}
