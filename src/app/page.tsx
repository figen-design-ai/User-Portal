"use client";

import React from "react";
import { HomePage } from "@/features/home";
import { AuthModal } from "@/features/auth";

export default function Page() {
  return (
    <>
      <HomePage />
      <AuthModal />
    </>
  );
}
