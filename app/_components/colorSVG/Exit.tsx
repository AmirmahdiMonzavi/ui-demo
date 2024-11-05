import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ExitPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Exit = ({ className, onClick }: ExitPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.91675 5.29995C7.17508 2.29995 8.71675 1.07495 12.0917 1.07495H12.2001C15.9251 1.07495 17.4167 2.56662 17.4167 6.29162V11.725C17.4167 15.45 15.9251 16.9416 12.2001 16.9416H12.0917C8.74175 16.9416 7.20008 15.7333 6.92508 12.7833"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91675 5.29995C7.17508 2.29995 8.71675 1.07495 12.0917 1.07495H12.2001C15.9251 1.07495 17.4167 2.56662 17.4167 6.29162V11.725C17.4167 15.45 15.9251 16.9416 12.2001 16.9416H12.0917C8.74175 16.9416 7.20008 15.7333 6.92508 12.7833"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91675 5.29995C7.17508 2.29995 8.71675 1.07495 12.0917 1.07495H12.2001C15.9251 1.07495 17.4167 2.56662 17.4167 6.29162V11.725C17.4167 15.45 15.9251 16.9416 12.2001 16.9416H12.0917C8.74175 16.9416 7.20008 15.7333 6.92508 12.7833"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91675 5.29995C7.17508 2.29995 8.71675 1.07495 12.0917 1.07495H12.2001C15.9251 1.07495 17.4167 2.56662 17.4167 6.29162V11.725C17.4167 15.45 15.9251 16.9416 12.2001 16.9416H12.0917C8.74175 16.9416 7.20008 15.7333 6.92508 12.7833"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16675 9H11.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16675 9H11.9001"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16675 9H11.9001"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16675 9H11.9001"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0417 6.20837L12.8334 9.00004L10.0417 11.7917"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0417 6.20837L12.8334 9.00004L10.0417 11.7917"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0417 6.20837L12.8334 9.00004L10.0417 11.7917"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0417 6.20837L12.8334 9.00004L10.0417 11.7917"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Exit;
