import { useState } from "react";

import { twMerge } from "tailwind-merge";

import { RadioInputPropsType } from "@/_types/Input";

const RadioInput = ({ value = false, label, disabled = false, onChange, name, id }: RadioInputPropsType) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex gap-1">
      <div className="relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-secondary-06 hover:border-secondary-05 disabled:border-secondary-09">
        <input
          id={id}
          name={name}
          type="radio"
          className="absolute h-full w-full cursor-pointer rounded-full opacity-0"
          disabled={disabled}
          defaultChecked={value}
          onChange={onChange}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        {value && (
          <div
            className={twMerge(
              "flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary-06 hover:bg-primary-07",
              disabled && "bg-primary-04",
              isHover && "bg-primary-05",
            )}
          ></div>
        )}
      </div>
      <span> {label}</span>
    </div>
  );
};

export default RadioInput;
