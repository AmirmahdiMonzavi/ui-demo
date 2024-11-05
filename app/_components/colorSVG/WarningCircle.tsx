import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type WarningCirclePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const WarningCircle = ({ className, onClick }: WarningCirclePropsType) => {
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
      <path
        d="M12.0274 22C17.5399 22 22.0502 17.5 22.0502 12C22.0502 6.5 17.5399 2 12.0274 2C6.51489 2 2.00464 6.5 2.00464 12C2.00464 17.5 6.51489 22 12.0274 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.0273 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.0217 16H12.0307"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningCircle;
