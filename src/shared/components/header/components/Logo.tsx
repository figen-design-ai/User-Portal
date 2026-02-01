'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import logoIcon from '@/assets/shared/logo.svg'

export const Logo: React.FC = () => (
  <Link
    href="/"
    className="flex items-center gap-2 shrink-0 text-black-dark"
    aria-label="FiGen home"
  >
    <Image src={logoIcon} alt="" width={104} height={104} className="w-104 h-104 shrink-0" />
    <span className="text-logo font-semibold leading-none tracking-[0.05em] text-black-dark">
      FiGen
    </span>
  </Link>
)
