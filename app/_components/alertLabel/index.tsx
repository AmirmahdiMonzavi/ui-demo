import React from "react";

import { twMerge } from "tailwind-merge";

export type AlertLabelPropsType = {
  text: string;
  type: "warning" | "error";
  labelParentClass?: string;
  customLabelClass?: string;
};

const AlertLabel = ({ text, type, labelParentClass, customLabelClass }: AlertLabelPropsType) => {
  const getAlertColor = () => {
    return type === "warning" ? "border-fire-06" : "border-ir-06";
  };

  return (
    <div className={twMerge("rounded-xl border p-4 px-[10px] text-black", getAlertColor(), labelParentClass)}>
      <label className={twMerge("text-xs font-medium capitalize text-secondary-10", customLabelClass)}>{text}</label>
    </div>
  );
};

export default AlertLabel;
