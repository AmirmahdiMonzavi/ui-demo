import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type PlusPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Plus = ({ className, onClick }: PlusPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.5 12H18.5" stroke="#2AD5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 18V6" stroke="#2AD5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Plus;
