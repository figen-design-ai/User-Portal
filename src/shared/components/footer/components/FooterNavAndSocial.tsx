'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { FOOTER_SOCIAL_LINKS } from '../constants'
import type { FooterNavLink } from '../types'

export interface FooterNavAndSocialProps {
  navLinks: FooterNavLink[]
}

export const FooterNavAndSocial: React.FC<FooterNavAndSocialProps> = ({ navLinks }) => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav
          className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6"
          aria-label="Footer navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-default font-normal text-black-dark hover:text-pink-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3" role="list">
          {FOOTER_SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 text-black-dark"
              role="listitem"
            >
              <Image
                src={icon}
                alt={`footer-social-${label.toLowerCase()}`}
                className="shrink-0 w-7 h-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-gray" aria-hidden />
  </>
)
