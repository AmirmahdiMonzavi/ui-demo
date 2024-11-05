import React from "react";

import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const ArrowLineUp = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M15.0583 7.97496L9.99998 2.91663L4.94165 7.97496"
        stroke="#415762"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.0834V3.05835"
        stroke="#415762"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLineUp;
