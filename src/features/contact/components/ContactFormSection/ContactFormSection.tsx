'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/shared/components/Button'
import { useContactForm } from './useContactForm'
import { ContactFormFields } from './ContactFormFields'
import { ContactInfoBlock } from './ContactInfoBlock'

export const ContactFormSection: React.FC = () => {
  const t = useTranslations('contact.form')
  const { register, control, handleSubmit, errors, isSubmitting } = useContactForm()

  return (
    <section
      className={[
        'w-full bg-white rounded-[24px] border-[0.5px] border-[var(--border,#898F9880)] shadow-[0px_0px_16px_1px_#00000012]',
        'pt-[32px] pr-[35px] pl-[35px] pb-[32px]',
      ].join(' ')}
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="text-h-3 font-bold text-black-dark mb-6">
        {t('title')}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ContactFormFields register={register} control={control} errors={errors} />
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className={[
            'w-full md:w-auto bg-pink-600 border-pink-600 text-white',
            'hover:bg-pink-500 hover:border-pink-500',
          ].join(' ')}
        >
          {t('submit')}
        </Button>
      </form>
      <ContactInfoBlock />
    </section>
  )
}
