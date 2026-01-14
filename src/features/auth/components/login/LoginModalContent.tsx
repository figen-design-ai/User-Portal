import React from "react";
import { Button, Divider, ModalSwitchLink } from "@/shared/view";
import { SocialLoginButtons } from "../shared/SocialLoginButtons";
import { LoginForm } from "./LoginForm";
import { AuthModalContentProps } from "../../types";

export const LoginModalContent: React.FC<AuthModalContentProps> = ({
  onSwitchModal,
  onSocialLogin,
  onSubmit,
}) => {
  return (
    <div className="space-y-6">
      <ModalSwitchLink
        promptText="Don't have an account?"
        linkText="Sign up"
        onClick={() => onSwitchModal("signup")}
      />
      <SocialLoginButtons onSocialLogin={onSocialLogin} />
      <Divider text="Or continue with email" />
      <LoginForm onForgotPassword={() => onSwitchModal("forgotPassword")} />
      <Button variant="ctaBtnModal" className="w-full" onClick={onSubmit}>
        Login
      </Button>
    </div>
  );
};
