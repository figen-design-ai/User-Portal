import { cn } from "@/shared/utils";
import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles = "rounded-lg font-medium transition-colors";
  
  const variants = {
    primary: "bg-gray-dark text-white border border-gray-dark hover:bg-gray-800",
    secondary: "bg-transparent text-gray-dark border border-gray-dark hover:bg-primary-pink hover:border-primary-black",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }; 
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
