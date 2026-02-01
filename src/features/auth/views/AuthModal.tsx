'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { Modal } from '@/shared/view'
import { useAuth } from '../hooks'
import { AuthModalType } from '../types'
import { LoginModalContent } from '../components/login/LoginModalContent'
import { SignupModalContent } from '../components/signup/SignupModalContent'
import { ForgotPasswordModalContent } from '../components/forgot-password/ForgotPasswordModalContent'
import { AuthModalContentProps } from '../types'

export const AuthModal: React.FC = () => {
  const t = useTranslations('auth')
  const { isModalOpen, modalType, closeModal, setModalType, login } = useAuth()

  const getModalTitle = (type: AuthModalType): string => {
    switch (type) {
      case 'login':
        return t('login.title')
      case 'signup':
        return t('signup.title')
      case 'forgotPassword':
        return t('forgotPassword.title')
      default:
        return t('login.title')
    }
  }

  const renderModalContent = (
    type: AuthModalType,
    props: AuthModalContentProps
  ): React.ReactNode => {
    switch (type) {
      case 'login':
        return <LoginModalContent {...props} />
      case 'signup':
        return <SignupModalContent {...props} />
      case 'forgotPassword':
        return <ForgotPasswordModalContent {...props} />
      default:
        return <LoginModalContent {...props} />
    }
  }

  const handleSwitchModal = (type: AuthModalType) => {
    setModalType(type)
  }

  const handleSubmit = () => {
    login({ email: 'user@example.com', name: 'User' })
  }

  const handleSocialLogin = (provider: 'google' | 'facebook' | 'github') => {
    login({ email: `${provider}@example.com`, name: provider })
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(modalType)}>
      {renderModalContent(modalType, {
        modalType,
        onSwitchModal: handleSwitchModal,
        onSocialLogin: handleSocialLogin,
        onSubmit: handleSubmit,
      })}
    </Modal>
  )
}
