import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const AttachmentText = ({ className, onClick }: SvgIconPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="32" height="32" rx="16" fill="#AAEEE9" />
      <rect x="2" y="2" width="32" height="32" rx="16" stroke="#D4F7F4" strokeWidth="4" />
      <path
        d="M24.6666 16.6667V20C24.6666 23.3334 23.3333 24.6667 19.9999 24.6667H15.9999C12.6666 24.6667 11.3333 23.3334 11.3333 20V16C11.3333 12.6667 12.6666 11.3334 15.9999 11.3334H19.3333"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.6666 16.6667H21.9999C19.9999 16.6667 19.3333 16 19.3333 14V11.3334L24.6666 16.6667Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 18.6666H18.6667"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 21.3334H17.3334"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentText;
