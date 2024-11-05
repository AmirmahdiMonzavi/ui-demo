import React from "react";

import { twMerge } from "tailwind-merge";

import { ButtonPropsType } from "@/_types/button";

import Spinner from "../spinner";
import { generateButtonStyles } from "./buttonConfig";

const Button = ({
  type = "button",
  title,
  onClick,
  disabled,
  variant = "primary",
  extraClassName,
  size = "md",
  isLoading = false,
  firstIcon,
  lastIcon,
}: ButtonPropsType) => {
  const config = {
    variant,
    size,
  };
  return (
    <button
      onClick={onClick}
      className={twMerge(generateButtonStyles(config), extraClassName)}
      type={type}
      disabled={disabled}
    >
      {isLoading ? (
        <Spinner theme={variant === "primary" ? "dark" : "light"} size="sm" />
      ) : (
        <div className="flex items-center justify-center gap-2 align-middle">
          {firstIcon && <>{firstIcon}</>}
          {title}
          {lastIcon && <>{lastIcon}</>}
        </div>
      )}
    </button>
  );
};

export default Button;
