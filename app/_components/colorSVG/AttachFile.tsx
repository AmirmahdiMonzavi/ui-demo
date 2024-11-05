import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type AttachFilePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const AttachFile = ({ className, onClick }: AttachFilePropsType) => {
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
        d="M14.9999 20.9998C12.4972 20.9998 9.70786 20.9975 7.01126 20.9975C4.79764 20.9975 3.00276 19.2014 3.00488 16.9877C3.0082 13.5353 3.0082 10.4643 3.00488 7.01185C3.00276 4.79823 4.79774 3.0024 7.01136 3.00391C9.67032 3.00572 12.3293 3.00572 14.9883 3.00391C17.2019 3.0024 18.9968 4.79793 18.9964 7.01155C18.9957 10.3121 18.9998 13.249 18.9998 16.9998M14.9999 20.9998V17.9998C14.9999 17.4475 15.4476 16.9998 15.9999 16.9998H18.9998M14.9999 20.9998L18.9998 16.9998M8.04818 9.15512V7.02395C8.04818 6.45833 7.58965 5.99979 7.02403 5.99979C6.4584 5.99979 5.99987 6.45833 5.99987 7.02395V8.99979C5.99987 10.1044 6.8953 10.9998 7.99987 10.9998C9.10444 10.9998 9.99987 10.1044 9.99987 8.99979V7.69882"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachFile;
