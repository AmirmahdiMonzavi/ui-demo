import { twMerge } from "tailwind-merge";

import { GenerateTagStylesType } from "@/_types/tag";

export const tagStyles = {
  default: "flex rounded-lg  gap-2 text-center items-center justify-center gap-2",
  primary: `text-primary-08 bg-primary-03 hover:bg-primary-04 active:bg-primary-05 hover:text-primary-09 active:text-primary-10`,
  outlined: `border bg-primary-03 bg-white border-primary-06 text-primary-06 hover:border-primary-07 hover:text-primary-07 hover:bg-primary-02 \ 
  active:bg-primary-03 active:border-primary-08 active:text-primary-08`,
  warning: "bg-sun-03 text-sun-08 hover:bg-sun-04 active:bg-sun-05 hover:text-sun-09 active:text-sun-10",
  success: "bg-leaf-03 text-leaf-08 hover:bg-leaf-04 active:bg-leaf-05 hover:text-leaf-09 active:text-leaf-10",
  secondary: "bg-storm-03 text-storm-08 hover:bg-storm-04 active:bg-storm-05 hover:text-storm-09 active:text-storm-10",
  danger: "bg-ir-03 text-ir-08 hover:bg-ir-04 active:bg-ir-05 hover:text-ir-09 active:text-ir-10",
};

export const disabledTagStyles = {
  primary: `bg-primary-04 text-primary-02 cursor-not-allowed`,
  outlined: `border-primary-04 text-primary-04 bg-white cursor-not-allowed`,
  success: "",
  warning: "",
  secondary: "",
  danger: "",
};

export const tagSize = {
  sm: "py-[6px] px-3 font-normal text-[10px] h-6",
  md: "py-2 px-4 gap-2 font-normal text-sm h-8",
};

export const generateTagStyles = ({ variant = "primary", size = "md", disabled = false }: GenerateTagStylesType) => {
  return twMerge(tagStyles["default"], !disabled ? tagStyles[variant] : disabledTagStyles[variant], tagSize[size]);
};
