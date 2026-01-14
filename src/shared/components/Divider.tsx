import React from "react";

interface DividerProps {
  text?: string;
}

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-border"></div>
      </div>
      {text && (
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-text">{text}</span>
        </div>
      )}
    </div>
  );
};
