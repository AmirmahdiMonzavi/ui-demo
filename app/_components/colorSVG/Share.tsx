import React, { MouseEventHandler } from "react";

import { twMerge } from "tailwind-merge";

export type SharePropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

const Share = ({ className, onClick }: SharePropsType) => {
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
        d="M20.9999 16.9998C20.9999 13.249 20.9958 10.3121 20.9965 7.01155C20.997 4.79793 19.202 3.0024 16.9884 3.00391C14.3274 3.00573 11.6664 3.00572 9.00547 3.00391C6.7942 3.0024 5 4.794 5 7.00528V7.9998M20.9999 16.9998H18C17.4477 16.9998 17 17.4475 17 17.9998V20.9998M20.9999 16.9998L17 20.9998M17 20.9998C14.4955 20.9998 11.7038 20.9975 9.00537 20.9975C6.7941 20.9975 5 19.2056 5 16.9943V16.4998M9 9.4998L5.75098 11.1697M5.75098 12.8299L9 14.4998M10.5 16.4998C10.7967 16.4998 11.0867 16.4118 11.3333 16.247C11.58 16.0822 11.7723 15.8479 11.8858 15.5738C11.9994 15.2997 12.0291 14.9982 11.9712 14.7072C11.9133 14.4162 11.7704 14.1489 11.5607 13.9392C11.3509 13.7294 11.0836 13.5865 10.7926 13.5286C10.5017 13.4708 10.2001 13.5004 9.92596 13.614C9.65187 13.7275 9.41763 13.9198 9.25281 14.1664C9.08798 14.4131 9 14.7031 9 14.9998C9 15.3976 9.15803 15.7792 9.43933 16.0605C9.72063 16.3418 10.1022 16.4998 10.5 16.4998ZM10.5 10.4998C10.7967 10.4998 11.0867 10.4118 11.3333 10.247C11.58 10.0822 11.7723 9.84789 11.8858 9.5738C11.9994 9.29971 12.0291 8.99819 11.9712 8.70722C11.9133 8.41625 11.7704 8.14893 11.5607 7.93915C11.3509 7.72937 11.0836 7.58651 10.7926 7.52863C10.5017 7.47075 10.2001 7.50043 9.92596 7.61396C9.65187 7.72749 9.41763 7.91977 9.25281 8.16645C9.08798 8.41312 9 8.70315 9 8.99982C9 9.39765 9.15803 9.77919 9.43933 10.0605C9.72063 10.3418 10.1022 10.4998 10.5 10.4998ZM4.5 13.4998C4.79667 13.4998 5.08667 13.4118 5.33334 13.247C5.58002 13.0822 5.7723 12.8479 5.88583 12.5738C5.99936 12.2997 6.02907 11.9982 5.97119 11.7072C5.91331 11.4162 5.77045 11.1489 5.56067 10.9392C5.35089 10.7294 5.0836 10.5865 4.79263 10.5286C4.50166 10.4708 4.20005 10.5004 3.92596 10.614C3.65188 10.7275 3.41763 10.9198 3.25281 11.1664C3.08799 11.4131 3 11.7031 3 11.9998C3 12.3976 3.15803 12.7792 3.43933 13.0605C3.72064 13.3418 4.10218 13.4998 4.5 13.4998Z"
        stroke="#0D0D0D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Share;