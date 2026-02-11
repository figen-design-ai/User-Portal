'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/shared/utils'
import iconChevronDown from '@/assets/feature/contact-us/icon-chevron-down.svg'
import type { ContactFormState } from '../../types'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'

const CHEVRON_SIZE = { width: 14, height: 16 }

const CATEGORY_OPTIONS = [
  { value: 'technical', key: 'technical' },
  { value: 'billing', key: 'billing' },
  { value: 'design', key: 'design' },
  { value: 'other', key: 'other' },
] as const

interface CategorySelectFieldProps {
  register: UseFormRegister<ContactFormState>
  errors: FieldErrors<ContactFormState>
}

export const CategorySelectField: React.FC<CategorySelectFieldProps> = ({ register, errors }) => {
  const t = useTranslations('contact.contactForm')

  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-gray-300">
        {t('categoryLabel')}
        <span className="text-red ml-1">*</span>
      </label>
      <div className="relative">
        <select
          {...register('category')}
          className={cn(
            'w-full pl-3 pr-10 py-2.5 rounded-lg border bg-white text-black-dark appearance-none',
            'focus:outline-none focus:border-black transition-colors',
            errors.category ? 'border-red' : 'border-gray'
          )}
          aria-required
          aria-invalid={!!errors.category}
        >
          <option value="">{t('categoryPlaceholder')}</option>
          {CATEGORY_OPTIONS.map(({ value, key }) => (
            <option key={value} value={value}>
              {t(`categoryOptions.${key}`)}
            </option>
          ))}
        </select>
        <Image
          src={iconChevronDown}
          alt=""
          {...CHEVRON_SIZE}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 shrink-0"
          aria-hidden
        />
      </div>
      {errors.category?.message && (
        <p className="mt-1 text-sm text-red" role="alert">
          {errors.category.message}
        </p>
      )}
    </div>
  )
}
