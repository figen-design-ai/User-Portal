'use client'

import React from 'react'
import { AboutPage } from '@/features/about'
import { AuthModal } from '@/features/auth'

export default function Page() {
  return (
    <>
      <AboutPage />
      <AuthModal />
    </>
  )
}
