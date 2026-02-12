'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/shared/utils'
import iconMail from '@/assets/feature/contact-us/icon-mail.svg'
import iconLocation from '@/assets/feature/contact-us/icon-location.svg'
import iconPhone from '@/assets/feature/contact-us/icon-phone.svg'

const iconSize = { width: 9, height: 9 }

const CONTACT_INFO_BASE_CLASS = 'flex items-center gap-3 font-normal text-[9px] text-gray-500'

const CONTACT_LINK_CLASS = cn(CONTACT_INFO_BASE_CLASS, 'hover:text-black-dark')

export const ContactInfoBlock: React.FC = () => {
  const tContact = useTranslations('contact')

  return (
    <div
      className={cn(
        'mt-[36px] mb-[40px] pt-[16px]',
        'border-t border-gray-200',
        'flex flex-col gap-4',
        'sm:flex-row sm:justify-between sm:items-start'
      )}
    >
      <a
        href="mailto:team@example.com"
        className={cn(CONTACT_LINK_CLASS, 'sm:justify-start')}
        aria-label={tContact('contactInfo.emailAriaLabel')}
      >
        <Image src={iconMail} alt="" {...iconSize} className="shrink-0" aria-hidden />
        <span>team@example.com</span>
      </a>
      <p className={cn(CONTACT_INFO_BASE_CLASS, 'sm:flex-1 sm:justify-center')}>
        <Image src={iconLocation} alt="" {...iconSize} className="shrink-0" aria-hidden />
        <span>{tContact('contactInfo.locationText')}</span>
      </p>
      <a
        href="tel:+840933333333"
        className={cn(CONTACT_LINK_CLASS, 'sm:justify-end')}
        aria-label={tContact('contactInfo.phoneAriaLabel')}
      >
        <Image src={iconPhone} alt="" {...iconSize} className="shrink-0" aria-hidden />
        <span>+84 0933333333</span>
      </a>
    </div>
  )
}
