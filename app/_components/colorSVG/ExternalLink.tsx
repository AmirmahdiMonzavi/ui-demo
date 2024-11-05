import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ExternalLinkPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const ExternalLink = ({ className, onClick }: ExternalLinkPropsType) => {
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
        d="M15.8333 4.16669L4.16659 15.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8333 12.725V4.16669H7.27492"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExternalLink;
