'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/shared/utils'
import { Button } from '@/shared/components/Button'
import { useContactForm } from '../../hooks/useContactForm'
import { ContactFormFields } from './ContactFormFields'
import { ContactInfoBlock } from './ContactInfoBlock'
import styles from '../../styles/contact.module.css'

export const ContactFormSection: React.FC = () => {
  const t = useTranslations('contact.contactForm')
  const { register, control, handleSubmit, errors, isSubmitting } = useContactForm()

  return (
    <section className={styles.cardContactForm} aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-h-3 font-bold text-black-dark mb-6">
        {t('title')}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ContactFormFields register={register} control={control} errors={errors} />
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className={cn(
            'w-full md:w-auto bg-pink-600 border-pink-600 text-white',
            'hover:bg-pink-500 hover:border-pink-500'
          )}
        >
          {t('submit')}
        </Button>
      </form>
      <ContactInfoBlock />
    </section>
  )
}
