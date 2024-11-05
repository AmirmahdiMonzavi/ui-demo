import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const AttachmentAudio = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M22.6666 16.6667C22.6666 17.9043 22.1749 19.0913 21.2997 19.9665C20.4246 20.8416 19.2376 21.3333 17.9999 21.3333M17.9999 21.3333C16.7622 21.3333 15.5753 20.8416 14.7001 19.9665C13.8249 19.0913 13.3333 17.9043 13.3333 16.6667M17.9999 21.3333V24M15.9999 24H19.9999M20.6666 14.6667C20.6666 13.9594 20.3856 13.2812 19.8855 12.7811C19.3854 12.281 18.7072 12 17.9999 12C17.2927 12 16.6144 12.281 16.1143 12.7811C15.6142 13.2812 15.3333 13.9594 15.3333 14.6667V16.6667C15.3333 17.3739 15.6142 18.0521 16.1143 18.5522C16.6144 19.0523 17.2927 19.3333 17.9999 19.3333C18.7072 19.3333 19.3854 19.0523 19.8855 18.5522C20.3856 18.0521 20.6666 17.3739 20.6666 16.6667V14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentAudio;
