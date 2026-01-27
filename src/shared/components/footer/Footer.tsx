'use client'

import React from 'react'
import type { FooterProps } from './types'
import { useFooterContent } from './hooks/useFooterContent'
import { Newsletter } from './components/Newsletter'
import { FooterNavAndSocial } from './components/FooterNavAndSocial'
import { Bottom } from './components/Bottom'

export const Footer: React.FC<FooterProps> = ({ onSubscribe }) => {
	const {
		navLinks,
		copyright,
		termsOfService,
		privacyPolicy,
		newsletterHeading,
		newsletterPlaceholder,
		newsletterButtonLabel,
	} = useFooterContent()

	return (
		<footer className="w-full bg-white" role="contentinfo">
			<Newsletter
				onSubscribe={onSubscribe}
				heading={newsletterHeading}
				placeholder={newsletterPlaceholder}
				buttonLabel={newsletterButtonLabel}
			/>
			<FooterNavAndSocial navLinks={navLinks} />
			<Bottom
				copyright={copyright}
				termsOfService={termsOfService}
				privacyPolicy={privacyPolicy}
			/>
		</footer>
	)
}
