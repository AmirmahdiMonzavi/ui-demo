import { useState } from "react";

import { twMerge } from "tailwind-merge";

import { CheckboxInputPropsType } from "@/_types/Input";

import Check from "../colorSVG/Check";

const CheckboxInput = ({ id, name, label, value = false, disabled = false, onChange }: CheckboxInputPropsType) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex gap-1">
      <div
        className={twMerge(
          "relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border border-secondary-06 hover:border-secondary-05",
          disabled && "border-secondary-09",
        )}
      >
        <input
          id={id}
          name={name}
          disabled={disabled}
          type="checkbox"
          className="absolute h-full w-full cursor-pointer rounded-lg opacity-0"
          defaultChecked={value}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onChange={onChange}
        />
        {value && (
          <div
            className={twMerge(
              "flex h-4.5 w-4.5 items-center justify-center rounded-md bg-primary-06 text-white",
              disabled && "bg-primary-09",
              isHover && "bg-primary-05",
            )}
          >
            <Check />
          </div>
        )}
      </div>
      <span> {label}</span>
    </div>
  );
};

export default CheckboxInput;
