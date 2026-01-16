'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Button, Divider, ModalSwitchLink } from '@/shared/view'
import { SocialLoginButtons } from '../shared/SocialLoginButtons'
import { SignupForm } from './SignupForm'
import { AuthModalContentProps } from '../../types'

export const SignupModalContent: React.FC<AuthModalContentProps> = ({
	onSwitchModal,
	onSocialLogin,
	onSubmit
}) => {
	const t = useTranslations('auth.signup')
	const tCommon = useTranslations('common')

	return (
		<div className="space-y-6">
			<ModalSwitchLink
				promptText={t('alreadyHaveAccount')}
				linkText={tCommon('login')}
				onClick={() => onSwitchModal('login')}
			/>
			<SignupForm />
			<Button className="w-full" onClick={onSubmit} variant="ctaBtnModal">
				{t('submit')}
			</Button>
			<Divider text={tCommon('orContinueWithEmail')} />
			<SocialLoginButtons onSocialLogin={onSocialLogin} />
		</div>
	)
}
