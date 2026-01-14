import React from "react";
import { Button, Divider, ModalSwitchLink } from "@/shared/view";
import { SocialLoginButtons } from "../shared/SocialLoginButtons";
import { SignupForm } from "./SignupForm";
import { AuthModalContentProps } from "../../types";

export const SignupModalContent: React.FC<AuthModalContentProps> = ({
  onSwitchModal,
  onSocialLogin,
  onSubmit,
}) => {
  return (
    <div className="space-y-6">
      <ModalSwitchLink
        promptText="Already have an account?"
        linkText="Login"
        onClick={() => onSwitchModal("login")}
      />
      <SignupForm />
      <Button className="w-full" onClick={onSubmit} variant="ctaBtnModal">
        Create an account
      </Button>
      <Divider text="Or continue with email" />
      <SocialLoginButtons onSocialLogin={onSocialLogin} />


    </div>
  );
};
