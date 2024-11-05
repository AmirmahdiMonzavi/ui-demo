import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type LinkCopyPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const LinkCopy = ({ className, onClick }: LinkCopyPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83325 14.125C4.45254 14.125 3.33325 13.0057 3.33325 11.625V6.625C3.33325 5.24429 4.45254 4.125 5.83325 4.125H10.8333C12.214 4.125 13.3333 5.24429 13.3333 6.625M14.1666 17.4583H8.33325C6.95254 17.4583 5.83325 16.339 5.83325 14.9583L5.83325 9.125C5.83325 7.74429 6.95254 6.625 8.33325 6.625L14.1666 6.625C15.5473 6.625 16.6666 7.74429 16.6666 9.125L16.6666 14.9583C16.6666 16.339 15.5473 17.4583 14.1666 17.4583Z"
        stroke="#54707D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkCopy;
