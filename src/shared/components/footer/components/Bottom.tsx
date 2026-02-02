'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import logoIcon from '@/assets/shared/logo.svg'

export interface BottomProps {
  copyright: string
  termsOfService: string
  privacyPolicy: string
}

export const Bottom: React.FC<BottomProps> = ({ copyright, termsOfService, privacyPolicy }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-small font-normal text-black-dark order-2 md:order-1">{copyright}</p>
      <Link
        href="/"
        className="flex items-center justify-center order-1 md:order-2"
        aria-label="FiGen home"
      >
        <Image src={logoIcon} alt="" width={121} height={121} className="w-121 h-121" />
      </Link>
      <nav className="flex items-center gap-4 order-3" aria-label="Legal">
        <Link
          href="#terms"
          className="text-small font-normal text-black-dark hover:text-pink-600 transition-colors"
        >
          {termsOfService}
        </Link>
        <Link
          href="#privacy"
          className="text-small font-normal text-black-dark hover:text-pink-600 transition-colors"
        >
          {privacyPolicy}
        </Link>
      </nav>
    </div>
  </div>
)
