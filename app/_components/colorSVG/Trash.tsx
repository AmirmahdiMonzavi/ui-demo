import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const Trash = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M21.0003 8.74984L20.3099 18.999C20.1355 21.4411 18.1034 23.3332 15.6551 23.3332H12.3455C9.89724 23.3332 7.86518 21.4411 7.69074 18.999L7.00033 8.74984M4.66699 9.33317C4.66699 9.33317 7.7781 8.1665 14.0003 8.1665C20.2225 8.1665 23.3337 9.33317 23.3337 9.33317M18.667 8.40813L18.5711 7.59111C18.2898 5.90345 16.8296 4.6665 15.1187 4.6665H12.8819C11.171 4.6665 9.71083 5.90345 9.42956 7.59111L9.33366 8.40813M16.917 13.9998V17.4998M11.0837 13.9998V17.4998M14.0003 12.8332L14.0003 18.6665"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trash;
