import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ArrowBackPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const ArrowBack = ({ className, onClick }: ArrowBackPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8334 7.00033H1.16675M1.16675 7.00033L7.00008 12.8337M1.16675 7.00033L7.00008 1.16699"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowBack;
