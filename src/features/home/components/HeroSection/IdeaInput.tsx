'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

interface IdeaInputProps {
	onIdeaSubmit?: (idea: string) => void
}

export const IdeaInput: React.FC<IdeaInputProps> = ({ onIdeaSubmit }) => {
	const [idea, setIdea] = useState('')
	const router = useRouter()
	const pathname = usePathname()
	const t = useTranslations('home')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (idea.trim()) {
			onIdeaSubmit?.(idea)
			const locale = pathname.split('/')[1]
			router.push(`/${locale}/chat`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
			<div className="relative">
				<textarea
					value={idea}
					onChange={e => setIdea(e.target.value)}
					placeholder={t('ideaPlaceholder')}
					rows={3}
					className="w-full px-6 py-4 pr-14 pb-14 rounded-xl border border-gray bg-white text-black-dark placeholder:text-black-60 focus:outline-none focus:ring-2 focus:ring-primary-gradient-start focus:border-transparent transition-colors text-lg resize-none"
				/>
				<button
					type="submit"
					className="absolute bottom-3 right-3 p-2 rounded-full bg-gray-light hover:bg-gray transition-colors"
					aria-label="Submit idea"
				>
					<svg
						className="w-5 h-5 text-black-dark"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</button>
			</div>
		</form>
	)
}
