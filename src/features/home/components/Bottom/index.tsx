'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { useFooterSections } from '../../hooks'
import { FooterSection } from './FooterSection'

export const Bottom: React.FC = () => {
	const t = useTranslations('footer')
	const footerSections = useFooterSections()

	const productSection = footerSections.find(s => s.title === t('product'))
	const plansSection = footerSections.find(s => s.title === t('plans'))
	const otherSections = footerSections.filter(
		s => s.title !== t('product') && s.title !== t('plans')
	)

	return (
		<footer className="bg-black-60 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
					<div className="flex-shrink-0 text-left">
						<h2 className="text-3xl font-bold text-white">FiGen</h2>
					</div>

					<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 ml-auto">
						<div className="flex flex-col gap-6 text-right">
							{productSection && <FooterSection section={productSection} />}
							{plansSection && <FooterSection section={plansSection} />}
						</div>

						{otherSections.map((section, index) => (
							<FooterSection key={index} section={section} />
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
