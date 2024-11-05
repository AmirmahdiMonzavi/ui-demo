import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type CheckCirclePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const CheckCircle = ({ className, onClick }: CheckCirclePropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0002 20.3333C16.0418 20.3333 20.1668 16.2083 20.1668 11.1667C20.1668 6.125 16.0418 2 11.0002 2C5.9585 2 1.8335 6.125 1.8335 11.1667C1.8335 16.2083 5.9585 20.3333 11.0002 20.3333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.104 11.1684L9.69817 13.7626L14.8957 8.57422"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckCircle;
