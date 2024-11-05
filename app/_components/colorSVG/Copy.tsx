import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type CopyPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Copy = ({ className, onClick }: CopyPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4953 16.996C9.46022 16.996 7.2085 16.9943 5.00661 16.994C2.79299 16.9937 0.998094 15.1976 1 12.984C1.00236 10.2422 1.00236 7.74982 1 5.00809C0.998094 2.79448 2.79307 0.998687 5.00669 1C6.99903 1.00118 8.99138 1.00118 10.9837 1C13.1973 0.998687 14.9923 2.79393 14.9922 5.00755C14.992 7.76339 14.9952 10.2761 14.9952 13.4405M11.4953 16.996V14.4405C11.4953 13.8882 11.943 13.4405 12.4953 13.4405H14.9952M11.4953 16.996L14.9952 13.4405M4.13763 16.9054C4.52256 18.1177 5.65618 18.996 6.9962 18.996H13.9952L16.9951 15.996V6.99569C16.9951 5.6501 16.1095 4.51307 14.8895 4.13306M4.99521 4.99602H11.9952M4.99521 7.99602H11.9952M4.99521 10.996H8.49524"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Copy;
