import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ArrowRightPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const ArrowRight = ({ className, onClick }: ArrowRightPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="6"
      height="10"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowRight;
