import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type HomePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Home = ({ className, onClick }: HomePropsType) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("cursor-pointer", className)}
      onClick={onClick}
    >
      <path
        d="M6.616 1.65795L2.304 5.01795C1.584 5.57795 1 6.76995 1 7.67395V13.6019C1 15.4579 2.512 16.9779 4.368 16.9779H13.632C15.488 16.9779 17 15.4579 17 13.6099V7.78595C17 6.81795 16.352 5.57795 15.56 5.02595L10.616 1.56195C9.496 0.777945 7.696 0.817945 6.616 1.65795Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.616 1.65795L2.304 5.01795C1.584 5.57795 1 6.76995 1 7.67395V13.6019C1 15.4579 2.512 16.9779 4.368 16.9779H13.632C15.488 16.9779 17 15.4579 17 13.6099V7.78595C17 6.81795 16.352 5.57795 15.56 5.02595L10.616 1.56195C9.496 0.777945 7.696 0.817945 6.616 1.65795Z"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.616 1.65795L2.304 5.01795C1.584 5.57795 1 6.76995 1 7.67395V13.6019C1 15.4579 2.512 16.9779 4.368 16.9779H13.632C15.488 16.9779 17 15.4579 17 13.6099V7.78595C17 6.81795 16.352 5.57795 15.56 5.02595L10.616 1.56195C9.496 0.777945 7.696 0.817945 6.616 1.65795Z"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.616 1.65795L2.304 5.01795C1.584 5.57795 1 6.76995 1 7.67395V13.6019C1 15.4579 2.512 16.9779 4.368 16.9779H13.632C15.488 16.9779 17 15.4579 17 13.6099V7.78595C17 6.81795 16.352 5.57795 15.56 5.02595L10.616 1.56195C9.496 0.777945 7.696 0.817945 6.616 1.65795Z"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 15.4167V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9 15.4167V12.5"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.4167V12.5"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.4167V12.5"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Home;
