'use client'

import React, { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Input } from '@/shared/components/Input'
import { Button } from '@/shared/components/Button'
import { Checkbox } from '@/shared/components/Checkbox'
import { cn } from '@/shared/utils'

const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('w-5 h-5 shrink-0', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('w-5 h-5 shrink-0', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('w-5 h-5 shrink-0', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormState {
  name: string
  email: string
  category: string
  message: string
  agreePrivacy: boolean
}

interface FormErrors {
  name?: string
  email?: string
  category?: string
  message?: string
  agreePrivacy?: string
}

export const ContactFormSection: React.FC = () => {
  const t = useTranslations('contact.form')
  const tContact = useTranslations('contact')
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    category: '',
    message: '',
    agreePrivacy: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = useCallback((): boolean => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = t('errors.nameRequired')
    if (!form.email.trim()) next.email = t('errors.emailRequired')
    else if (!EMAIL_REGEX.test(form.email)) next.email = t('errors.emailInvalid')
    if (!form.category) next.category = t('errors.categoryRequired')
    if (!form.message.trim()) next.message = t('errors.messageRequired')
    if (!form.agreePrivacy) next.agreePrivacy = t('errors.agreeRequired')
    setErrors(next)
    return Object.keys(next).length === 0
  }, [form, t])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!validate()) return
      setIsSubmitting(true)
      setTimeout(() => setIsSubmitting(false), 500)
    },
    [validate]
  )

  const handleChange = useCallback((field: keyof FormState, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }, [])

  return (
    <section
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="text-h-3 font-bold text-black-dark mb-6">
        {t('title')}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label={t('nameLabel')}
          placeholder={t('namePlaceholder')}
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          error={errors.name}
          aria-required
        />
        <Input
          label={t('emailLabel')}
          type="email"
          placeholder={t('emailPlaceholder')}
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          error={errors.email}
          aria-required
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-black-dark mb-1.5">
            {t('categoryLabel')}
          </label>
          <select
            value={form.category}
            onChange={e => handleChange('category', e.target.value)}
            className={cn(
              'w-full px-4 py-2.5 rounded-lg border bg-white text-black-dark',
              'focus:outline-none focus:border-black transition-colors',
              errors.category ? 'border-red' : 'border-gray'
            )}
            aria-required
            aria-invalid={!!errors.category}
          >
            <option value="">{t('categoryPlaceholder')}</option>
            <option value="technical">{t('categoryOptions.technical')}</option>
            <option value="billing">{t('categoryOptions.billing')}</option>
            <option value="design">{t('categoryOptions.design')}</option>
            <option value="other">{t('categoryOptions.other')}</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red" role="alert">
              {errors.category}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-black-dark mb-1.5">
            {t('messageLabel')}
          </label>
          <textarea
            value={form.message}
            onChange={e => handleChange('message', e.target.value)}
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
          {errors.message && (
            <p className="mt-1 text-sm text-red" role="alert">
              {errors.message}
            </p>
          )}
        </div>
        <Checkbox
          label={t('privacyLabel')}
          checked={form.agreePrivacy}
          onChange={e => handleChange('agreePrivacy', e.target.checked)}
          aria-invalid={!!errors.agreePrivacy}
        />
        {errors.agreePrivacy && (
          <p className="text-sm text-red" role="alert">
            {errors.agreePrivacy}
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-pink-500 border-pink-500 hover:bg-pink-600 text-white"
        >
          {t('submit')}
        </Button>
      </form>
      <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-3">
        <a
          href="mailto:team@example.com"
          className="flex items-center gap-3 text-small text-gray-500 hover:text-black-dark"
          aria-label={tContact('contactInfo.emailLabel')}
        >
          <EnvelopeIcon />
          <span>team@example.com</span>
        </a>
        <p className="flex items-center gap-3 text-small text-gray-500">
          <LocationIcon aria-hidden />
          <span>{tContact('contactInfo.location')}</span>
        </p>
        <a
          href="tel:+840933333333"
          className="flex items-center gap-3 text-small text-gray-500 hover:text-black-dark"
          aria-label={tContact('contactInfo.phoneLabel')}
        >
          <PhoneIcon />
          <span>+84 0933333333</span>
        </a>
      </div>
    </section>
  )
}
