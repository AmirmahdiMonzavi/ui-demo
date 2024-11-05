import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ChartPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Chart = ({ className, onClick }: ChartPropsType) => {
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
      <path d="M3.5 22H21.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6.09998 8.37988H4.5C3.95 8.37988 3.5 8.82988 3.5 9.37988V17.9999C3.5 18.5499 3.95 18.9999 4.5 18.9999H6.09998C6.64998 18.9999 7.09998 18.5499 7.09998 17.9999V9.37988C7.09998 8.82988 6.64998 8.37988 6.09998 8.37988Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 5.19043H11.7C11.15 5.19043 10.7 5.64043 10.7 6.19043V18.0004C10.7 18.5504 11.15 19.0004 11.7 19.0004H13.3C13.85 19.0004 14.3 18.5504 14.3 18.0004V6.19043C14.3 5.64043 13.85 5.19043 13.3 5.19043Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 2H18.9C18.35 2 17.9 2.45 17.9 3V18C17.9 18.55 18.35 19 18.9 19H20.5C21.05 19 21.5 18.55 21.5 18V3C21.5 2.45 21.05 2 20.5 2Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chart;
