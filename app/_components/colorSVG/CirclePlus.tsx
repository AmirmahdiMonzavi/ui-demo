import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type CirclePlusPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const CirclePlus = ({ className, onClick }: CirclePlusPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#2AD5C6" />
      <path
        d="M7.33398 12H16.6673"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.6663V7.33301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CirclePlus;