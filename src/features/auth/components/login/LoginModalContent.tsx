'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Button, Divider, ModalSwitchLink } from '@/shared/view'
import { SocialLoginButtons } from '../shared/SocialLoginButtons'
import { LoginForm } from './LoginForm'
import { AuthModalContentProps } from '../../types'

export const LoginModalContent: React.FC<AuthModalContentProps> = ({
	onSwitchModal,
	onSocialLogin,
	onSubmit,
}) => {
	const t = useTranslations('auth.login')
	const tCommon = useTranslations('common')

	return (
		<div className="space-y-6">
			<ModalSwitchLink
				promptText={t('dontHaveAccount')}
				linkText={tCommon('signUp')}
				onClick={() => onSwitchModal('signup')}
			/>
			<SocialLoginButtons onSocialLogin={onSocialLogin} />
			<Divider text={tCommon('orContinueWithEmail')} />
			<LoginForm onForgotPassword={() => onSwitchModal('forgotPassword')} />
			<Button variant="ctaBtnModal" className="w-full" onClick={onSubmit}>
				{t('submit')}
			</Button>
		</div>
	)
}
