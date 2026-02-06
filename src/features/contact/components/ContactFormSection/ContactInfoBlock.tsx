'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import iconMail from '@/assets/feature/contact_us/icon_mail.svg'
import iconLocation from '@/assets/feature/contact_us/icon_location.svg'
import iconPhone from '@/assets/feature/contact_us/icon_phone.svg'

const iconSize = { width: 9, height: 9 }

const CONTACT_INFO_BASE_CLASS = [
  'flex items-center gap-3 font-inter font-normal text-[9px] text-gray-500',
].join(' ')

const CONTACT_LINK_CLASS = [CONTACT_INFO_BASE_CLASS, 'hover:text-black-dark'].join(' ')

export const ContactInfoBlock: React.FC = () => {
  const tContact = useTranslations('contact')

  return (
    <div
      className={[
        'mt-[36px] mb-[40px] pt-[16px]',
        'border-t border-gray-200',
        'flex flex-col gap-4',
        'sm:flex-row sm:justify-between sm:items-start',
      ].join(' ')}
    >
      <a
        href="mailto:team@example.com"
        className={[CONTACT_LINK_CLASS, 'sm:justify-start'].join(' ')}
        aria-label={tContact('contactInfo.emailLabel')}
      >
        <Image src={iconMail} alt="" {...iconSize} className="shrink-0" aria-hidden />
        <span>team@example.com</span>
      </a>
      <p className={[CONTACT_INFO_BASE_CLASS, 'sm:flex-1 sm:justify-center'].join(' ')}>
        <Image src={iconLocation} alt="" {...iconSize} className="shrink-0" aria-hidden />
        <span>{tContact('contactInfo.location')}</span>
      </p>
      <a
        href="tel:+840933333333"
        className={[CONTACT_LINK_CLASS, 'sm:justify-end'].join(' ')}
        aria-label={tContact('contactInfo.phoneLabel')}
      >
        <Image src={iconPhone} alt="" {...iconSize} className="shrink-0" aria-hidden />
        <span>+84 0933333333</span>
      </a>
    </div>
  )
}
