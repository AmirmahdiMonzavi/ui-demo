import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type CheckMessagePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const CheckMessage = ({ className, onClick }: CheckMessagePropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4505 11.0833L14.1172 13.4166L12.9505 12.25M5.36719 9.33556C5.36719 6.75698 7.45653 4.66663 10.0339 4.66663H19.3619C21.9392 4.66663 24.0286 6.75698 24.0286 9.33557V15.1717C24.0286 17.7503 21.9392 19.8407 19.3619 19.8407H13.2503C12.9356 19.8407 12.6342 19.9679 12.4146 20.1934L9.70284 22.9782C8.9724 23.7283 7.70052 23.211 7.70052 22.1637V19.8893C7.70052 19.4726 7.47109 19.0964 7.14424 18.8382C6.06188 17.9831 5.36719 16.6586 5.36719 15.1717V9.33556Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckMessage;
