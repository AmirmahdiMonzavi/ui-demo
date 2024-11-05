import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

import { SvgIconPropsType } from "@/_types";

const Conversation = ({ className, onClick }: SvgIconPropsType) => {
  return (
    <svg
      onClick={onClick}
      className={twMerge("cursor-pointer", className)}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.1V16.1277C10 17.5091 11.1196 18.629 12.5007 18.629H15.7757C15.9444 18.629 16.1058 18.6971 16.2235 18.8179L17.6767 20.3098C18.0681 20.7116 18.7496 20.4345 18.7496 19.8734V18.655C18.7496 18.4318 18.8726 18.2302 19.0477 18.0919C19.6277 17.6338 20 16.9243 20 16.1277V13.0012C20 11.6198 18.8804 10.5 17.4993 10.5H17M4 7.75158C4 5.95578 5.45549 4.5 7.25092 4.5H13.7491C15.5445 4.5 17 5.95578 17 7.75158V11.8161C17 13.6119 15.5445 15.0676 13.7491 15.0676H9.49155C9.27233 15.0676 9.0624 15.1562 8.90942 15.3133L7.02033 17.2527C6.51148 17.7751 5.62546 17.4148 5.62546 16.6855V15.1015C5.62546 14.8113 5.46564 14.5493 5.23794 14.3695C4.48394 13.774 4 12.8516 4 11.8161V7.75158Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Conversation;
