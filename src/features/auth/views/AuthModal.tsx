import React from "react";
import { Modal } from "@/shared/view";
import { useAuth } from "../hooks";
import { AuthModalType } from "../types";
import { LoginModalContent } from "../components/login/LoginModalContent";
import { SignupModalContent } from "../components/signup/SignupModalContent";
import { ForgotPasswordModalContent } from "../components/forgot-password/ForgotPasswordModalContent";
import { AuthModalContentProps } from "../types";

const getModalTitle = (modalType: AuthModalType): string => {
  switch (modalType) {
    case "login":
      return "Log in";
    case "signup":
      return "Sign up";
    case "forgotPassword":
      return "Forgot your password";
    default:
      return "Log in";
  }
};

const renderModalContent = (
  modalType: AuthModalType,
  props: AuthModalContentProps
): React.ReactNode => {
  switch (modalType) {
    case "login":
      return <LoginModalContent {...props} />;
    case "signup":
      return <SignupModalContent {...props} />;
    case "forgotPassword":
      return <ForgotPasswordModalContent {...props} />;
    default:
      return <LoginModalContent {...props} />;
  }
};

export const AuthModal: React.FC = () => {
  const {
    isModalOpen,
    modalType,
    closeModal,
    setModalType,
    login,
  } = useAuth();

  const handleSwitchModal = (type: AuthModalType) => {
    setModalType(type);
  };

  const handleSubmit = () => {
    login({ email: "user@example.com", name: "User" });
  };

  const handleSocialLogin = (provider: "google" | "facebook" | "github") => {
    console.log(`Login with ${provider}`);
    login({ email: `${provider}@example.com`, name: provider });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={getModalTitle(modalType)}
    >
      {renderModalContent(modalType, {
        modalType,
        onSwitchModal: handleSwitchModal,
        onSocialLogin: handleSocialLogin,
        onSubmit: handleSubmit,
      })}
    </Modal>
  );
};
