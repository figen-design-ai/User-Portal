'use client'

import React from 'react'
import Image from 'next/image'
import { SOCIAL_LINKS } from '../constants'

export const SocialBar: React.FC = () => (
	<div className="flex justify-end items-center h-30 px-4 sm:px-6 lg:px-8">
		<div className="flex items-center gap-3" role="list">
			{SOCIAL_LINKS.map(({ href, icon, label }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={label}
					className="flex items-center justify-center w-8 h-8 text-pink-600"
					role="listitem"
				>
					<Image src={icon} alt="" width={20} height={20} className="shrink-0" />
				</a>
			))}
		</div>
	</div>
)
