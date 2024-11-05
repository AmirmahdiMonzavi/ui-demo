import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type DownloadPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Download = ({ className, onClick }: DownloadPropsType) => {
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
        d="M13.3332 17.5C11.2477 17.5 8.92322 17.4981 6.67605 17.4981C4.83137 17.4981 3.33563 16.0013 3.3374 14.1566C3.34017 11.2796 3.34017 8.72039 3.3374 5.84337C3.33563 3.99869 4.83145 2.50216 6.67613 2.50342C8.89193 2.50493 11.1077 2.50493 13.3236 2.50342C15.1682 2.50216 16.664 3.99844 16.6636 5.84312C16.6631 8.59356 16.6665 11.041 16.6665 14.1667M13.3332 17.5V15C13.3332 14.5398 13.7063 14.1667 14.1666 14.1667H16.6665M13.3332 17.5L16.6665 14.1667M8.74989 7.22208L8.74989 11.6665M8.74989 11.6665L5.83322 9.31111M8.74989 11.6665L11.6666 9.31111M8.74989 4.99999V5.74073"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Download;
