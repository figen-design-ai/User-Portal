import React, { useMemo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import type { ContactFormState } from '../types'

type ContactFormTranslations = ReturnType<typeof useTranslations<'contact.contactForm'>>

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const DEFAULT_VALUES: ContactFormState = {
  name: '',
  email: '',
  category: '',
  message: '',
  agreePrivacy: false,
}

const buildContactFormSchema = (t: ContactFormTranslations) =>
  z.object({
    name: z.string().min(1, t('errors.nameRequired')),
    email: z
      .string()
      .min(1, t('errors.emailRequired'))
      .regex(EMAIL_REGEX, t('errors.emailInvalid')),
    category: z.string().min(1, t('errors.categoryRequired')),
    message: z.string().min(1, t('errors.messageRequired')),
    agreePrivacy: z.boolean().refine(val => val === true, {
      message: t('errors.agreeRequired'),
    }),
  })

export type ContactFormSchema = z.infer<ReturnType<typeof buildContactFormSchema>>

export const useContactForm = () => {
  const t = useTranslations('contact.contactForm')
  const schema = useMemo(() => buildContactFormSchema(t), [t])

  const {
    register,
    control,
    handleSubmit: rhfHandleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormState>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
  })

  const onValidSubmit = useCallback(() => {
    //TODO: Implement API call when backend is ready
    return new Promise<void>(resolve => setTimeout(resolve, 500))
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      void rhfHandleSubmit(onValidSubmit)(e)
    },
    [rhfHandleSubmit, onValidSubmit]
  )

  return {
    register,
    control,
    handleSubmit,
    errors,
    isSubmitting,
  }
}
