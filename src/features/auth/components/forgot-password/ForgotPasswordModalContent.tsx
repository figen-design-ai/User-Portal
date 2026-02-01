'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Button, ModalSwitchLink } from '@/shared/view'
import { ForgotPasswordForm } from './ForgotPasswordForm'
import { AuthModalContentProps } from '../../types'

export const ForgotPasswordModalContent: React.FC<AuthModalContentProps> = ({
  onSwitchModal,
  onSubmit,
}) => {
  const t = useTranslations('auth.forgotPassword')

  return (
    <div className="space-y-6">
      <ForgotPasswordForm />
      <Button className="w-full" onClick={onSubmit} variant="ctaBtnModal">
        {t('requestResetLink')}
      </Button>
      <ModalSwitchLink
        promptText=""
        linkText={t('backToLogin')}
        onClick={() => onSwitchModal('login')}
      />
    </div>
  )
}
