import React from "react";
import { Button, ModalSwitchLink } from "@/shared/view";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { AuthModalContentProps } from "../../types";

export const ForgotPasswordModalContent: React.FC<AuthModalContentProps> = ({
  onSwitchModal,
  onSubmit,
}) => {
  return (
    <div className="space-y-6">
      <ForgotPasswordForm />
      <Button className="w-full" onClick={onSubmit} variant="ctaBtnModal">
        Request reset link
      </Button>
      <ModalSwitchLink
        promptText=""
        linkText="Back to login"
        onClick={() => onSwitchModal("login")}
      />
    </div>
  );
};
