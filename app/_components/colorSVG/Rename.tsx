import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type RenamePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Rename = ({ className, onClick }: RenamePropsType) => {
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
        d="M9.5 13.25L10.75 14.5M4 16L4 8C4 5.79086 5.79086 4 8 4L16 4C18.2091 4 20 5.79086 20 8L20 16C20 18.2091 18.2091 20 16 20L8 20C5.79086 20 4 18.2091 4 16ZM8.56122 17L11.6837 13.8776C11.6837 13.8776 12.3954 13.0284 11.6837 12.3164C10.9719 11.6045 10.1224 12.3164 10.1224 12.3164L7 15.4388V17H8.56122Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rename;
