import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ThreePointerPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const ThreePointer = ({ className, onClick }: ThreePointerPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0003 18.3327C14.5837 18.3327 18.3337 14.5827 18.3337 9.99935C18.3337 5.41602 14.5837 1.66602 10.0003 1.66602C5.41699 1.66602 1.66699 5.41602 1.66699 9.99935C1.66699 14.5827 5.41699 18.3327 10.0003 18.3327Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3301 10.0007H13.3375"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99607 10.0007H10.0036"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66209 10.0007H6.66957"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThreePointer;