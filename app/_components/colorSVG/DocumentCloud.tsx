import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type DocumentCloudPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const DocumentCloud = ({ className, onClick }: DocumentCloudPropsType) => {
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
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 10V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.76 18.2598C11.41 18.4298 11.41 21.8298 13.76 21.9998H19.32C19.99 21.9998 20.65 21.7498 21.14 21.2998C22.79 19.8598 21.91 16.9798 19.74 16.7098C18.96 12.0198 12.18 13.7998 13.78 18.2698"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentCloud;