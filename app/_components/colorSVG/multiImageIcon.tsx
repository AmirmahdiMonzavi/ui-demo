import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type MultiImageIconPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const MultiImageIcon = ({ className, onClick }: MultiImageIconPropsType) => {
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
      <path
        d="M2.76929 5.33356C2.76929 2.19631 4.00006 0.941406 7.07698 0.941406H10.7693C13.8462 0.941406 15.077 2.19631 15.077 5.33356V9.09827C15.077 12.2355 13.8462 13.4904 10.7693 13.4904H7.07698C4.00006 13.4904 2.76929 12.2355 2.76929 9.09827"
        stroke="#23AFA3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.53902 14.7443H9.23132C12.3082 14.7443 13.539 13.4894 13.539 10.3522V6.58747C13.539 3.45021 12.3082 2.19531 9.23132 2.19531H5.53902C2.46209 2.19531 1.23132 3.45021 1.23132 6.58747V10.3522C1.23132 13.4894 2.46209 14.7443 5.53902 14.7443Z"
        fill="white"
        stroke="#23AFA3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.53851 7.21684C6.21824 7.21684 6.76928 6.655 6.76928 5.96193C6.76928 5.26887 6.21824 4.70703 5.53851 4.70703C4.85877 4.70703 4.30774 5.26887 4.30774 5.96193C4.30774 6.655 4.85877 7.21684 5.53851 7.21684Z"
        stroke="#23AFA3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.64307 12.8311L4.67691 10.7542C5.16307 10.4217 5.8646 10.4593 6.30153 10.8421L6.5046 11.024C6.9846 11.4444 7.75999 11.4444 8.23999 11.024L10.8 8.78404C11.28 8.36365 12.0554 8.36365 12.5354 8.78404L13.5385 9.66248"
        stroke="#23AFA3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MultiImageIcon;
