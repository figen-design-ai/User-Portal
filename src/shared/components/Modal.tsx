import React, { useEffect } from "react";
import { cn } from "@/shared/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4",
          "max-h-[90vh] overflow-y-auto",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="relative flex items-center justify-center px-6 pt-6 pb-2">
            <h2 
              className="text-[36px] font-normal leading-[100%] text-center text-gray-dark"
              style={{ fontFamily: "Noto Serif Gujarati" }}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-text hover:text-gray-dark transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="px-6 pb-6 pt-2">{children}</div>
      </div>
    </div>
  );
};
