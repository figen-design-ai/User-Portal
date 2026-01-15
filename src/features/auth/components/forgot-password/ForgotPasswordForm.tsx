import React, { useState } from "react";
import { Input } from "@/shared/view";

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <form className="space-y-4">
      <p className="text-sm text-black-60">
        Please enter the email address or phone number you'd like your password reset information sent to
      </p>
      <Input
        label="Email address or phone number"
        type="text"
        placeholder="Enter your email address or phone number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
};
