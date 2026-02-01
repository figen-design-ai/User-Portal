'use client'

import React, { useState } from 'react'
import { Button, Input } from '@/shared/view'
import { bottomBgImage } from '../constants'

export interface NewsletterProps {
  onSubscribe?: (email: string) => void
  heading: string
  placeholder: string
  buttonLabel: string
}

export const Newsletter: React.FC<NewsletterProps> = ({
  onSubscribe,
  heading,
  placeholder,
  buttonLabel,
}) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubscribe?.(email)
    setEmail('')
  }

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-12 md:py-16"
      style={{
        backgroundImage: `url(${bottomBgImage.src})`,
      }}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-6 rounded-xl bg-black-dark"
        >
          <h2
            id="newsletter-heading"
            className="text-h-4 sm:text-h-3 font-bold text-white shrink-0"
          >
            {heading}
          </h2>
          <div className="flex-1 flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-white text-black-dark placeholder:text-gray-200 border-gray rounded-lg"
              aria-label={placeholder}
            />
            <Button
              type="submit"
              className="shrink-0 bg-pink-600 border-pink-600 text-white hover:bg-pink-700 hover:border-pink-700"
            >
              {buttonLabel}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
