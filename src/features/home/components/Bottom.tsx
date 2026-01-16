'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

interface FooterLink {
	label: string
	href?: string
}

interface FooterSection {
	title: string
	links: FooterLink[]
}

export const Bottom: React.FC = () => {
	const t = useTranslations('footer')

	const footerSections: FooterSection[] = [
		{
			title: t('product'),
			links: [
				{ label: t('sections.product.design') },
				{ label: t('sections.product.devMode') },
				{ label: t('sections.product.ai') },
				{ label: t('sections.product.downloads') }
			]
		},
		{
			title: t('plans'),
			links: [
				{ label: t('sections.plans.pricing') },
				{ label: t('sections.plans.enterprise') },
				{ label: t('sections.plans.organization') },
				{ label: t('sections.plans.professional') }
			]
		},
		{
			title: t('useCases'),
			links: [
				{ label: t('sections.useCases.uiDesign') },
				{ label: t('sections.useCases.uxDesign') },
				{ label: t('sections.useCases.wireframing') },
				{ label: t('sections.useCases.diagraming') },
				{ label: t('sections.useCases.prototyping') },
				{ label: t('sections.useCases.brainstorming') },
				{ label: t('sections.useCases.onlineWhiteboard') },
				{ label: t('sections.useCases.aiAppBuilder') },
				{ label: t('sections.useCases.aiWebsiteBuilder') }
			]
		},
		{
			title: t('resources'),
			links: [
				{ label: t('sections.resources.blog') },
				{ label: t('sections.resources.bestPractices') },
				{ label: t('sections.resources.qrCodeGenerator') },
				{ label: t('sections.resources.templates') },
				{ label: t('sections.resources.resourceLibrary') },
				{ label: t('sections.resources.support') }
			]
		},
		{
			title: t('company'),
			links: [
				{ label: t('sections.company.events') },
				{ label: t('sections.company.customers') },
				{ label: t('sections.company.careers') },
				{ label: t('sections.company.investors') }
			]
		}
	]

	const productSection = footerSections.find((s) => s.title === t('product'))
	const plansSection = footerSections.find((s) => s.title === t('plans'))
	const otherSections = footerSections.filter(
		(s) => s.title !== t('product') && s.title !== t('plans')
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
							{productSection && (
								<div className="flex flex-col items-end">
									<h3 className="text-sm font-semibold text-black-60 mb-4 uppercase tracking-wide">
										{productSection.title}
									</h3>
									<ul className="space-y-3">
										{productSection.links.map((link, index) => (
											<li key={index}>
												<a
													href={link.href || '#'}
													className="text-sm text-white hover:text-white transition-colors cursor-pointer"
												>
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}
							{plansSection && (
								<div className="flex flex-col items-end">
									<h3 className="text-sm font-semibold text-black-60 mb-4 uppercase tracking-wide">
										{plansSection.title}
									</h3>
									<ul className="space-y-3">
										{plansSection.links.map((link, index) => (
											<li key={index}>
												<a
													href={link.href || '#'}
													className="text-sm text-white hover:text-white transition-colors cursor-pointer"
												>
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>

						{otherSections.map((section, sectionIndex) => (
							<div
								key={sectionIndex}
								className="flex flex-col text-right items-end"
							>
								<h3 className="text-sm font-semibold text-black-60 mb-4 uppercase tracking-wide">
									{section.title}
								</h3>
								<ul className="space-y-3">
									{section.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<a
												href={link.href || '#'}
												className="text-sm text-white hover:text-white transition-colors cursor-pointer"
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
