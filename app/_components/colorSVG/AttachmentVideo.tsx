import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const AttachmentVideo = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M24.6667 19.9997V15.9997C24.6667 12.6663 23.3334 11.333 20 11.333H16C12.6667 11.333 11.3334 12.6663 11.3334 15.9997V19.9997C11.3334 23.333 12.6667 24.6663 16 24.6663H20C23.3334 24.6663 24.6667 23.333 24.6667 19.9997Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.6801 14.7402H24.3201" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.6801 11.4062V14.6462" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.3199 11.4062V14.3462" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16.5 19.6331V18.8331C16.5 17.8064 17.2267 17.3864 18.1133 17.8998L18.8067 18.2998L19.5 18.6998C20.3867 19.2131 20.3867 20.0531 19.5 20.5664L18.8067 20.9664L18.1133 21.3664C17.2267 21.8798 16.5 21.4598 16.5 20.4331V19.6331V19.6331Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentVideo;
