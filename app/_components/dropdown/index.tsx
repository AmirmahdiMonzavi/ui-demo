import React, { useState, useEffect, useRef } from "react";

import { twMerge } from "tailwind-merge";

type DropdownPropsType = {
  icon?: React.ReactNode;
  title?: string;
  titleExtraClassName?: string;
  dropdownItems: React.ReactNode;
  openOptions?: "hover" | "click";
};

const Dropdown = ({ icon, title, titleExtraClassName, dropdownItems, openOptions = "hover" }: DropdownPropsType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (openOptions === "hover") {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (openOptions === "hover") {
      setIsDropdownOpen(false);
    }
  };

  const handleClick = () => {
    if (openOptions === "click") {
      setIsDropdownOpen((prevState) => !prevState);
    }
  };

  return (
    <div
      onMouseEnter={openOptions === "hover" ? handleMouseEnter : undefined}
      onMouseLeave={openOptions === "hover" ? handleMouseLeave : undefined}
      ref={dropdownRef}
      className="relative cursor-pointer"
    >
      <div className="flex items-center gap-3" onClick={openOptions === "click" ? handleClick : undefined}>
        <span className="flex items-center gap-2">
          {icon && <>{icon}</>}
          <span className={twMerge("font-normal, text-base", titleExtraClassName)}>{title}</span>
        </span>
      </div>
      {isDropdownOpen && <div className="absolute top-full z-10 animate-fade-in">{dropdownItems}</div>}
    </div>
  );
};

export default Dropdown;
