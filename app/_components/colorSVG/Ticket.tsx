import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type TicketPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Ticket = ({ className, onClick }: TicketPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0105 5.83301C14.2255 5.83301 14.3997 6.00729 14.3997 6.22228C14.3997 7.51094 15.4444 8.55561 16.7331 8.55561C18.0217 8.55561 19.0664 7.51094 19.0664 6.22228C19.0664 6.00729 19.2407 5.83301 19.4557 5.83301H20.2331C22.1661 5.83301 23.7331 7.40001 23.7331 9.33301V18.6663C23.7331 20.5993 22.1661 22.1663 20.2331 22.1663H19.4549C19.2403 22.1663 19.0664 21.9924 19.0664 21.7778C19.0664 20.4892 18.0217 19.4445 16.7331 19.4445C15.4444 19.4445 14.3997 20.4892 14.3997 21.7778C14.3997 21.9924 14.2258 22.1663 14.0112 22.1663H8.56641C6.63341 22.1663 5.06641 20.5993 5.06641 18.6663V9.33301C5.06641 7.40001 6.63341 5.83301 8.56641 5.83301H14.0105Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7344 18.6663V9.33301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
};

export default Ticket;
