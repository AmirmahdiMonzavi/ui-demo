import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ArrowLeftPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const ArrowLeft = ({ className, onClick }: ArrowLeftPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 9L1 5L5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowLeft;
