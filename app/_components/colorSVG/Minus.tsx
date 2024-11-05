import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type MinusPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Minus = ({ className, onClick }: MinusPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33398 8H12.6673"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Minus;
