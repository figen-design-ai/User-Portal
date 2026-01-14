import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Bottom } from "../components/Bottom";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <HeroSection />
      <Bottom />
    </div>
  );
};
