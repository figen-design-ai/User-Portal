'use client'

import React from 'react'
import { AboutUsPage } from '@/features/about-us'
import { AuthModal } from '@/features/auth'

export default function Page() {
  return (
    <>
      <AboutUsPage />
      <AuthModal />
    </>
  )
}
