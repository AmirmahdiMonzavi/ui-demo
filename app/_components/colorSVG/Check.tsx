import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type CheckPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Check = ({ className, onClick }: CheckPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66669 4.90649L4.89002 8.13314C5.023 8.26145 5.20057 8.33317 5.38536 8.33317C5.57014 8.33317 5.74772 8.26145 5.88069 8.13314L12.3334 1.6665"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
