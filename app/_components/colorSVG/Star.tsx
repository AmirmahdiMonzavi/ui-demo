import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type StarPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Star = ({ className, onClick }: StarPropsType) => {
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
        d="M11.4417 2.92495L12.9083 5.85828C13.1083 6.26662 13.6417 6.65828 14.0917 6.73328L16.75 7.17495C18.45 7.45828 18.85 8.69162 17.625 9.90828L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0416C16.1833 18.0666 15.1083 18.85 13.3167 17.7916L10.825 16.3166C10.375 16.05 9.63332 16.05 9.17499 16.3166L6.68332 17.7916C4.89999 18.85 3.81665 18.0583 4.28332 16.0416L4.87499 13.4833C4.98332 13 4.79165 12.325 4.44165 11.975L2.37499 9.90828C1.15832 8.69162 1.54999 7.45828 3.24999 7.17495L5.90832 6.73328C6.34999 6.65828 6.88332 6.26662 7.08332 5.85828L8.54999 2.92495C9.34999 1.33328 10.65 1.33328 11.4417 2.92495Z"
        stroke="#415762"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star;