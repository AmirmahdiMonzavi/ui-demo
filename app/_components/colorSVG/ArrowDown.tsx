import React from "react";

import { twMerge } from "tailwind-merge";

export type ArrowDownPropsType = {
  className?: string;
};

const ArrowDown = ({ className }: ArrowDownPropsType) => {
  return (
    <svg
      className={twMerge("cursor-pointer", className)}
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowDown;
