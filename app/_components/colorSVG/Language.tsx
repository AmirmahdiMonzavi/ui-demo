import React from "react";

import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const Language = ({ className, onClick }: SvgIconPropsType) => {
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
        d="M18.3333 10.0003C18.3333 14.6027 14.6023 18.3337 9.99996 18.3337M18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699M18.3333 10.0003H1.66663M9.99996 18.3337C5.39759 18.3337 1.66663 14.6027 1.66663 10.0003M9.99996 18.3337C12.0844 16.0517 13.2689 13.0903 13.3333 10.0003C13.2689 6.91035 12.0844 3.94895 9.99996 1.66699M9.99996 18.3337C7.91556 16.0517 6.731 13.0903 6.66663 10.0003C6.731 6.91035 7.91556 3.94895 9.99996 1.66699M1.66663 10.0003C1.66663 5.39795 5.39759 1.66699 9.99996 1.66699"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Language;
