import { useTranslations } from 'next-intl'
import type { FooterSection } from '../types'

export const useFooterSections = (): FooterSection[] => {
	const t = useTranslations('footer')

	return [
		{
			title: t('product'),
			links: [
				{ label: t('sections.product.design') },
				{ label: t('sections.product.devMode') },
				{ label: t('sections.product.ai') },
				{ label: t('sections.product.downloads') },
			],
		},
		{
			title: t('plans'),
			links: [
				{ label: t('sections.plans.pricing') },
				{ label: t('sections.plans.enterprise') },
				{ label: t('sections.plans.organization') },
				{ label: t('sections.plans.professional') },
			],
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
				{ label: t('sections.useCases.aiWebsiteBuilder') },
			],
		},
		{
			title: t('resources'),
			links: [
				{ label: t('sections.resources.blog') },
				{ label: t('sections.resources.bestPractices') },
				{ label: t('sections.resources.qrCodeGenerator') },
				{ label: t('sections.resources.templates') },
				{ label: t('sections.resources.resourceLibrary') },
				{ label: t('sections.resources.support') },
			],
		},
		{
			title: t('company'),
			links: [
				{ label: t('sections.company.events') },
				{ label: t('sections.company.customers') },
				{ label: t('sections.company.careers') },
				{ label: t('sections.company.investors') },
			],
		},
	]
}
