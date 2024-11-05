import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type PausePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Pause = ({ className, onClick }: PausePropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4749 19.0026C15.0773 19.0026 18.8083 15.2716 18.8083 10.6693C18.8083 6.0669 15.0773 2.33594 10.4749 2.33594C5.87256 2.33594 2.1416 6.0669 2.1416 10.6693C2.1416 15.2716 5.87256 19.0026 10.4749 19.0026Z"
        stroke="#2AD5C6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.44176 14.1945H11.5584C13.3251 14.1945 14.0251 13.4862 14.0251 11.7279V9.6112C14.0251 7.84453 13.3168 7.14453 11.5584 7.14453H9.44176C7.6751 7.14453 6.9751 7.85286 6.9751 9.6112V11.7279C6.9751 13.4862 7.68343 14.1945 9.44176 14.1945Z"
        fill="#2AD5C6"
        stroke="#2AD5C6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Pause;
