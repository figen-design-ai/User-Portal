'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Input, PasswordInput, Checkbox } from '@/shared/view'

export const SignupForm: React.FC = () => {
  const t = useTranslations('auth.signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  return (
    <form className="space-y-4">
      <Input
        label={t('emailLabel')}
        type="text"
        placeholder={t('emailPlaceholder')}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <PasswordInput
        label={t('passwordLabel')}
        placeholder={t('passwordPlaceholder')}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <PasswordInput
        label={t('confirmPasswordLabel')}
        placeholder={t('confirmPasswordPlaceholder')}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        label={t('newsletter')}
        checked={newsletter}
        onChange={e => setNewsletter(e.target.checked)}
      />
    </form>
  )
}
