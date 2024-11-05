import React from "react";

import { twMerge } from "tailwind-merge";

export type CardPropsType = {
  children: React.ReactNode;
  extraClassName?: string;
};

const Card = ({ children, extraClassName }: CardPropsType) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-start gap-6 rounded-xxl border border-secondary-03 bg-white p-6 shadow-e2",
        extraClassName,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
