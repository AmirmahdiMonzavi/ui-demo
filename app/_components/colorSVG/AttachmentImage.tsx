import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const AttachmentImage = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M16 24.6667H20C23.3333 24.6667 24.6666 23.3333 24.6666 20V16C24.6666 12.6667 23.3333 11.3333 20 11.3333H16C12.6666 11.3333 11.3333 12.6667 11.3333 16V20C11.3333 23.3333 12.6666 24.6667 16 24.6667Z"
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16.6667C16.7364 16.6667 17.3334 16.0697 17.3334 15.3333C17.3334 14.597 16.7364 14 16 14C15.2636 14 14.6667 14.597 14.6667 15.3333C14.6667 16.0697 15.2636 16.6667 16 16.6667Z"
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.78 22.6333L15.0667 20.4267C15.5934 20.0733 16.3534 20.1133 16.8267 20.52L17.0467 20.7133C17.5667 21.16 18.4067 21.16 18.9267 20.7133L21.7 18.3333C22.22 17.8867 23.06 17.8867 23.58 18.3333L24.6667 19.2667"
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentImage;
