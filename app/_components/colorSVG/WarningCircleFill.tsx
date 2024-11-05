import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type WarningCircleFillPropsType = {
  className?: string;
  fill?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const WarningCircleFill = ({ fill, className, onClick }: WarningCircleFillPropsType) => {
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
      <rect width="16" height="16" rx="8" fill={fill} />
      <path
        d="M7.99984 8L7.99984 4M7.99984 12L8.00049 11.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningCircleFill;
