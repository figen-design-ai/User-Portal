import React from "react";
import backgroundImage from "../../assets/background.jpg";
import { PromptButton } from "../../types";
import { IdeaInput } from "./IdeaInput";
import { PromptButtons } from "./PromptButtons";

const defaultPrompts: PromptButton[] = [
  { id: "1", label: "Onboarding Flow" },
  { id: "2", label: "Data dashboard" },
  { id: "3", label: "Gradient Gallery" },
];

export const HeroSection: React.FC = () => {
  const handleIdeaSubmit = (idea: string) => {
    console.log("Idea submitted:", idea);
  };

  const handlePromptClick = (prompt: PromptButton) => {
    console.log("Prompt clicked:", prompt);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      />
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col min-h-screen">
        <div className="flex flex-col items-center text-center space-y-8 flex-1 justify-center">
          <h1
            className="font-young-serif font-normal text-[64px] leading-[100%] tracking-[0.05em] text-center align-middle text-black-dark"
            style={{ textShadow: "0px 4px 4px rgba(45, 45, 45, 1)" }}
          >
            Ideas making real with FiGen
          </h1>

          <IdeaInput onIdeaSubmit={handleIdeaSubmit} />

          <PromptButtons
            prompts={defaultPrompts}
            onPromptClick={handlePromptClick}
          />
        </div>

        <p
          className="font-young-serif font-normal text-[24px] leading-[100%] tracking-normal text-center max-w-4xl mx-auto text-black"
        >
          From idea to prototype—faster than ever. Design with AI and watch your
          product come alive.
        </p>
      </div>
    </div>
  );
};
