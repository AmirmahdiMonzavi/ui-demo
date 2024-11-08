import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type RefreshPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Refresh = ({ className, onClick }: RefreshPropsType) => {
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
        d="M0.833374 2.33331V7.33332M0.833374 7.33332H5.83337M0.833374 7.33332L4.70004 3.69998C5.59566 2.80391 6.70368 2.14932 7.92071 1.79729C9.13774 1.44527 10.4241 1.40727 11.6598 1.68686C12.8955 1.96645 14.0402 2.55451 14.9872 3.39616C15.9341 4.23782 16.6524 5.30564 17.075 6.49998M19.1667 15.6666V10.6666M19.1667 10.6666H14.1667M19.1667 10.6666L15.3 14.3C14.4044 15.1961 13.2964 15.8506 12.0794 16.2027C10.8623 16.5547 9.57596 16.5927 8.34028 16.3131C7.10459 16.0335 5.95987 15.4455 5.01293 14.6038C4.06598 13.7621 3.34768 12.6943 2.92504 11.5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Refresh;
