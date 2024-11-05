import React from "react";

import { twMerge } from "tailwind-merge";

import { TagPropsType } from "@/_types/tag";

import { generateTagStyles } from "./tagConfig";

const Tag = ({
  title,
  disabled,
  variant = "primary",
  extraClassName,
  size = "md",
  firstIcon,
  lastIcon,
}: TagPropsType) => {
  const config = {
    variant,
    size,
    disabled,
  };
  return (
    <div className={twMerge(generateTagStyles(config), extraClassName)}>
      <div className="flex items-center justify-center gap-1 whitespace-nowrap align-middle">
        {firstIcon && <>{firstIcon}</>}
        {title}
      </div>
      {lastIcon && <>{lastIcon}</>}
    </div>
  );
};

export default Tag;
