import React from "react";

export type ArrowUpPropsType = {
  className?: string;
};

const ArrowUp = ({ className }: ArrowUpPropsType) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 12.5L10 7.5L5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowUp;
