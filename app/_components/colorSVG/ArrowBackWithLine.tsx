import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ArrowBackWithLinePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const ArrowBackWithLine = ({ className, onClick }: ArrowBackWithLinePropsType) => {
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
      <path
        stroke="currentColor"
        d="M13 12.0001L6 12.0001M6 12.0001L10 17.0001M6 12.0001L10 7.0001M18 12.0001L16 12.0001"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowBackWithLine;
