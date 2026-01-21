'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Input } from '@/shared/view'

export const ForgotPasswordForm: React.FC = () => {
	const t = useTranslations('auth.forgotPassword')
	const [email, setEmail] = useState('')

	return (
		<form className="space-y-4">
			<p className="text-sm text-black-60">{t('description')}</p>
			<Input
				label={t('emailLabel')}
				type="text"
				placeholder={t('emailPlaceholder')}
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
		</form>
	)
}
