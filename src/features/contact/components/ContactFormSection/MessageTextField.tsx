'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/shared/utils'
import type { ContactFormState } from '../../types'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'

interface MessageTextFieldProps {
  register: UseFormRegister<ContactFormState>
  errors: FieldErrors<ContactFormState>
}

export const MessageTextField: React.FC<MessageTextFieldProps> = ({ register, errors }) => {
  const t = useTranslations('contact.contactForm')
  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-gray-300">
        {t('messageLabel')}
        <span className="text-red ml-1">*</span>
      </label>
      <textarea
        {...register('message')}
        placeholder={t('messagePlaceholder')}
        rows={4}
        className={cn(
          'w-full px-4 py-2.5 rounded-lg border border-gray bg-white',
          'text-black-dark placeholder:text-black-60',
          'focus:outline-none focus:border-black transition-colors',
          errors.message && 'border-red'
        )}
        aria-required
        aria-invalid={!!errors.message}
      />
      {errors.message?.message && (
        <p className="mt-1 text-sm text-red" role="alert">
          {errors.message.message}
        </p>
      )}
    </div>
  )
}
