'use client'

import React from 'react'
import { Controller, type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { Input } from '@/shared/components/Input'
import { Checkbox } from '@/shared/components/Checkbox'
import { CategorySelectField } from './CategorySelectField'
import { MessageTextField } from './MessageTextField'
import type { FormState } from './types'

interface ContactFormFieldsProps {
  register: UseFormRegister<FormState>
  control: Control<FormState>
  errors: FieldErrors<FormState>
}

const CONTACT_INPUT_LABEL_CLASS = 'text-small font-bold text-gray-300'
const CONTACT_CHECKBOX_LABEL_TEXT_CLASS = 'text-slate-400'

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  register,
  control,
  errors,
}) => {
  const t = useTranslations('contact.form')
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label={t('nameLabel')}
          placeholder={t('namePlaceholder')}
          labelClassName={CONTACT_INPUT_LABEL_CLASS}
          {...register('name')}
          error={errors.name?.message}
          aria-required
        />
        <Input
          label={t('emailLabel')}
          type="email"
          placeholder={t('emailPlaceholder')}
          labelClassName={CONTACT_INPUT_LABEL_CLASS}
          {...register('email')}
          error={errors.email?.message}
          aria-required
        />
      </div>
      <CategorySelectField register={register} errors={errors} />
      <MessageTextField register={register} errors={errors} />
      <Controller
        name="agreePrivacy"
        control={control}
        render={({ field }) => (
          <>
            <Checkbox
              label={t('privacyLabel')}
              checked={field.value}
              onChange={e => field.onChange(e.target.checked)}
              onBlur={field.onBlur}
              aria-invalid={!!errors.agreePrivacy}
              labelTextClassName={CONTACT_CHECKBOX_LABEL_TEXT_CLASS}
            />
            {errors.agreePrivacy?.message && (
              <p className="text-sm text-red" role="alert">
                {errors.agreePrivacy.message}
              </p>
            )}
          </>
        )}
      />
    </>
  )
}
