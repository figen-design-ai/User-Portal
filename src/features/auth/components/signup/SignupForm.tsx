import React, { useState } from "react";
import { Input, PasswordInput, Checkbox } from "@/shared/view";

export const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <form className="space-y-4">
      <Input
        label="Email address or phone number"
        type="text"
        placeholder="Enter your email address or phone number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordInput
        label="Confirm your password"
        placeholder="Enter your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        label="Please keep me updated by email with the latest news, event updates"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />
    </form>
  );
};
