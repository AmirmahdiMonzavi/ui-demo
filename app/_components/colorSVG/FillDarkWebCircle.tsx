import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type FillDarkWebCirclePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const FillDarkWebCircle = ({ className, onClick }: FillDarkWebCirclePropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.22 1H8.775C10.555 1 11 1.445 11 3.22V6.385C11 8.165 10.555 8.605 8.78 8.605H3.22C1.445 8.61 1 8.165 1 6.39V3.22C1 1.445 1.445 1 3.22 1Z"
        fill="#415762"
        stroke="#415762"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 8.61035V11.0004" stroke="#415762" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 6.5H11" stroke="#E0E7EB" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75 11H8.25" stroke="#415762" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default FillDarkWebCircle;
