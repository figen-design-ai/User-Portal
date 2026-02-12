'use client'

import { useTranslations } from 'next-intl'
import type { FooterNavLink } from '../types'

export interface UseFooterContentReturn {
  navLinks: FooterNavLink[]
  copyright: string
  termsOfService: string
  privacyPolicy: string
  newsletterHeading: string
  newsletterPlaceholder: string
  newsletterButtonLabel: string
}

export const useFooterContent = (): UseFooterContentReturn => {
  const t = useTranslations('footer')
  const tCommon = useTranslations('common')

  const navLinks: FooterNavLink[] = [
    { href: '/about-us', label: tCommon('aboutUs') },
    { href: '/contact', label: t('contact') },
    { href: '#pricing', label: tCommon('navPricing') },
  ]

  return {
    navLinks,
    copyright: t('copyright'),
    termsOfService: t('termsOfService'),
    privacyPolicy: t('privacyPolicy'),
    newsletterHeading: t('subscribeNewsletters'),
    newsletterPlaceholder: t('enterYourEmail'),
    newsletterButtonLabel: t('subscribeNow'),
  }
}
