import { twMerge } from "tailwind-merge";

import { GenerateButtonStylesType } from "@/_types/button";

export const buttonStyles = {
  default: `px-6 rounded-lg text-center flex items-center justify-center`,
  primary: `text-white bg-primary-06 hover:bg-primary-07 focus:bg-primary-08 active:bg-primary-alf focus:outline-none focus:ring-primary-07 \
   disabled:bg-primary-04 disabled:text-primary-02 disabled:cursor-not-allowed`,
  outlined: `border bg-white border-primary-06 text-primary-06 hover:text-primary-07 hover:bg-primary-02 focus:bg-primary-03 active:bg-primary-alnf focus:outline-none focus:ring-primary-03 \
   disabled:bg-white disabled:bg-blur-2 disabled:text-primary-03 disabled:border-primary-03 disabled:cursor-not-allowed`,
  text: `text-primary-06 hover:text-primary-07 focus:text-primary-08 active:text-aln border-0 disabled:bg-white focus:outline-none disabled:bg-blur-2 disabled:text-primary-03 disabled:border-0 disabled:cursor-not-allowed `,
} as const;

export const buttonTypeSize = {
  sm: "py-2 font-normal text-sm h-7",
  lg: "py-3 font-bold text-base h-11",
  xl: "py-3.5 font-bold text-lg h-12",
  md: "py-2 font-normal text-base h-10",
} as const;

export const generateButtonStyles = ({ variant = "primary", size = "md" }: GenerateButtonStylesType) => {
  return twMerge(buttonStyles["default"], buttonStyles[variant], buttonTypeSize[size]);
};
