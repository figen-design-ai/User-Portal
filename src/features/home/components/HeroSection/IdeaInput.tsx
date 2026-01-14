import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface IdeaInputProps {
  onIdeaSubmit?: (idea: string) => void;
}

export const IdeaInput: React.FC<IdeaInputProps> = ({ onIdeaSubmit }) => {
  const [idea, setIdea] = useState("");
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onIdeaSubmit?.(idea);
      router.push("/chat");
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your design ideas"
          rows={3}
          className="w-full px-6 py-4 pr-14 pb-14 rounded-xl border border-gray-border bg-white text-gray-dark placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-primary-gradient-start focus:border-transparent transition-colors text-lg resize-none"
        />
        <button
          type="submit"
          className="absolute bottom-3 right-3 p-2 rounded-full bg-gray-light hover:bg-gray-border transition-colors"
          aria-label="Submit idea"
        >
          <svg
            className="w-5 h-5 text-gray-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
