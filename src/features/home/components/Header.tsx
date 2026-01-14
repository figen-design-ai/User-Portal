import React from "react";
import { SearchBar, Button } from "@/shared/view";
import { useAppDispatch } from "@/config/store";
import { openModal } from "@/features/auth/hooks";
import iconHeader from "../assets/icon_header.png";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(openModal("login"));
  };

  return (
    <header className="w-full h-130 bg-gray-light border-b border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="font-young-serif text-5xl font-normal leading-none tracking-[0.05em] text-center align-middle text-gray-dark">
              FiGen
            </span>
            <img src={iconHeader.src} alt="Icon Header" className="w-16 h-16" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="font-young-serif text-[20px] font-normal leading-none tracking-normal text-center align-middle text-gray-dark hover:text-primary-gradient-start transition-colors"
            >
              Contact us
            </a>

            <a
              href="#contact"
              className="font-young-serif text-[20px] font-normal leading-none tracking-normal text-center align-middle text-gray-dark hover:text-primary-gradient-start transition-colors"
            >
              About us
            </a>
          </nav>

          <div className="flex items-center gap-4 flex-1 justify-end max-w-md">
            <div className="hidden sm:block flex-1 max-w-xs">
              <SearchBar placeholder="Search template" />
            </div>
            <Button variant="secondary" onClick={handleLoginClick}>
              Log in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
