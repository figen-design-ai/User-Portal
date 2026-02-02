import React from 'react'

interface ModalSwitchLinkProps {
  promptText: string
  linkText: string
  onClick: () => void
}

export const ModalSwitchLink: React.FC<ModalSwitchLinkProps> = ({
  promptText,
  linkText,
  onClick,
}) => {
  return (
    <div className="text-center">
      <p className="text-sm text-black-60">
        {promptText}{' '}
        <button
          type="button"
          onClick={onClick}
          className="text-black hover:text-black hover:underline font-medium"
        >
          {linkText}
        </button>
      </p>
    </div>
  )
}
