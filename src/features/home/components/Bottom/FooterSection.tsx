import React from 'react'
import type { FooterSection as FooterSectionType } from '../../types'

interface FooterSectionProps {
	section: FooterSectionType
}

export const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
	return (
		<div className="flex flex-col items-end text-right">
			<h3 className="text-sm font-semibold text-black-60 mb-4 uppercase tracking-wide">
				{section.title}
			</h3>
			<ul className="space-y-3">
				{section.links.map((link, index) => (
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
	)
}
