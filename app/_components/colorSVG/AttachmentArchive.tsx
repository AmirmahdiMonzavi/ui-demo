import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const AttachmentArchive = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M19.3333 20.3333L20.2222 21.3333L22 19.3333M12 20.0027C12 19.2739 12.0006 18.6407 12.001 18.0078C12.0015 16.9005 12.8991 16.0023 14.0059 16.0033C16.812 16.0058 19.188 16.0058 21.9941 16.0033C23.1009 16.0023 23.9984 16.9005 23.999 18.0078C23.9993 18.6269 24 19.2465 24 20.0027M23.9972 16.8427C23.9964 18.1542 23.9964 19.3502 23.9972 20.6618C23.9982 22.1381 22.801 23.3352 21.3252 23.3337C19.0236 23.3313 16.9763 23.3313 14.6747 23.3337C13.199 23.3352 12.0017 22.1377 12.0028 20.6614C12.0042 18.8251 12.0042 17.1787 12.0028 15.3424C12.0017 13.8661 13.1987 12.668 14.6745 12.6678C15.5645 12.6677 16.4309 12.6673 17.0004 12.667C17.3687 12.6668 17.6666 12.9655 17.6666 13.334V13.5002C17.6666 13.8686 17.9653 14.1671 18.3335 14.1673C19.4061 14.1676 20.353 14.1685 21.3255 14.1688C22.8013 14.1692 23.9982 15.3663 23.9972 16.8427Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentArchive;
