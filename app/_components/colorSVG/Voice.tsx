import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type VoicePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Voice = ({ className, onClick }: VoicePropsType) => {
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
        d="M12 10V6M14 9V7M19 10C19 11.8565 18.2625 13.637 16.9497 14.9497C15.637 16.2625 13.8565 17 12 17M12 17C10.1435 17 8.36302 16.2625 7.05026 14.9497C5.73751 13.637 5 11.8565 5 10M12 17V21M9 21H15M10 9V7M16 7C16 5.93913 15.5786 4.92178 14.8284 4.17163C14.0783 3.42149 13.0609 3 12 3C10.9391 3 9.92172 3.42149 9.17157 4.17163C8.42143 4.92178 8 5.93913 8 7V10C8 11.0609 8.42143 12.0782 9.17157 12.8284C9.92172 13.5785 10.9391 14 12 14C13.0609 14 14.0783 13.5785 14.8284 12.8284C15.5786 12.0782 16 11.0609 16 10V7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Voice;
