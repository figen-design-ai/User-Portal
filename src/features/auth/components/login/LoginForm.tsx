import React, { useState } from "react";
import { Input, PasswordInput, Checkbox } from "@/shared/view";

interface LoginFormProps {
  onForgotPassword?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
      <div className="flex items-center justify-between">
        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-black hover:underline"
        >
          Forgot your password?
        </button>
      </div>
    </form>
  );
};
