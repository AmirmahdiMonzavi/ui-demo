import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type ClosePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Close = ({ className, onClick }: ClosePropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C14.3136 22 16.5555 21.1979 18.344 19.7302C20.1324 18.2625 21.3566 16.2201 21.808 13.951C22.2594 11.6819 21.91 9.32651 20.8194 7.28613C19.7288 5.24574 17.9645 3.64664 15.8271 2.76125C13.6896 1.87587 11.3113 1.759 9.0974 2.43057C6.88346 3.10213 4.97087 4.52057 3.6855 6.44421C2.40014 8.36784 1.82154 10.6776 2.04828 12.9801C2.27503 15.2825 3.29309 17.4351 4.929 19.071C6.80434 20.9464 9.34785 22 12 22V22Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 15L15 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Close;
