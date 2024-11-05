import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type MessagePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const AddMessage = ({ className, onClick }: MessagePropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.667 12.2493H16.3337M14.0003 14.5827V9.91601M4.66699 9.33495C4.66699 6.75637 6.75633 4.66602 9.33366 4.66602H18.6617C21.239 4.66602 23.3284 6.75637 23.3284 9.33495V15.1711C23.3284 17.7497 21.239 19.8401 18.6617 19.8401H12.5501C12.2354 19.8401 11.934 19.9673 11.7144 20.1928L9.00265 22.9776C8.27221 23.7277 7.00033 23.2104 7.00033 22.1631V19.8887C7.00033 19.472 6.7709 19.0958 6.44404 18.8376C5.36168 17.9825 4.66699 16.658 4.66699 15.1711V9.33495Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddMessage;
