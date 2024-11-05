import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const AttachmentLink = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M19.9933 21.6667H21C23.0133 21.6667 24.6667 20.02 24.6667 18C24.6667 15.9867 23.02 14.3333 21 14.3333H19.9933"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14.3333H15C12.98 14.3333 11.3333 15.98 11.3333 18C11.3333 20.0133 12.98 21.6667 15 21.6667H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3333 18H20.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentLink;
