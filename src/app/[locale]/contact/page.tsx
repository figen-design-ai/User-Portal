'use client'

import React from 'react'
import { ContactPage } from '@/features/contact'
import { AuthModal } from '@/features/auth'

export default function Page() {
  return (
    <>
      <ContactPage />
      <AuthModal />
    </>
  )
}
