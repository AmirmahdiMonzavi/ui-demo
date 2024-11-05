import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type SortPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Sort = ({ className, onClick }: SortPropsType) => {
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
      <path d="M2 4.66699H14" stroke="#668899" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 8H12" stroke="#668899" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.66669 11.333H9.33335" stroke="#668899" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default Sort;
