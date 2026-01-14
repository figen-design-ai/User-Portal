import React from "react";
import { Button } from "@/shared/view";
import { PromptButton } from "../../types";

interface PromptButtonsProps {
  prompts: PromptButton[];
  onPromptClick?: (prompt: PromptButton) => void;
}

export const PromptButtons: React.FC<PromptButtonsProps> = ({
  prompts,
  onPromptClick,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-wrap gap-8 justify-center">
      {prompts.map((prompt) => (
        <Button
          key={prompt.id}
          variant="secondary"
          onClick={() => onPromptClick?.(prompt)}
          className=""
        >
          {prompt.label}
        </Button>
      ))}
    </div>
  );
};
