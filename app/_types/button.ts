import { MouseEventHandler } from "react";

export type ButtonPropsType = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "outlined" | "text";
  extraClassName?: string;
  size?: "sm" | "lg" | "xl" | "md";
  isLoading?: Boolean;
  isDir?: Boolean;
  firstIcon?: JSX.Element;
  lastIcon?: JSX.Element;
};

export type GenerateButtonStylesType = Partial<ButtonPropsType>;
