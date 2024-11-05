import Image from "next/image";

import React, { ChangeEvent, useState } from "react";

import { twMerge } from "tailwind-merge";

import { InputPropsType } from "@/_types/Input";

import Close from "../colorSVG/Close";
import ErrorMessage from "./errorMessage";
import { LABELPOSITION } from "./inputConfig";

type TextAreaPropsType = Omit<InputPropsType, "type" | "value" | "onChange" | "extraInputClassName" | "accept"> & {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  extraTextareaClassName?: string;
  rows?: number;
  cols?: number;
};

const MESSAGE_ICON = {
  general: "",
  warning: <Image src="/outlinedWarning.svg" alt="outlined_warning_icon" width={16} height={16} />,
  error: <Image src="/triangleError.svg" alt="triangle_error_icon" width={16} height={16} />,
  success: <Image src="/circleSuccessIcon.svg" alt="circle_success_icon" width={16} height={16} />,
} as const;

const Textarea = ({
  size = "md",
  messageType = "general",
  isClose = false,
  maxLength,
  elements,
  label,
  message,
  errorMessage,
  required,
  disabled,
  autoCompleteKey,
  placeholder,
  onClick,
  onChange,
  name,
  value,
  id,
  extraClassName,
  extraTextareaClassName,
  customMessageIcon,
  rows,
  cols,
  minLength,
  onFocus,
  onBlur,
}: TextAreaPropsType) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };
  const onBlurHandler = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  return (
    <div className={twMerge("relative mt-2", extraClassName)}>
      <label htmlFor={id}>
        <div
          className={twMerge(
            "relative h-full w-full cursor-pointer rounded-lg pt-1 text-sm",
            !value && !isFocused && "border border-secondary-05",
            !value && !isFocused && errorMessage && "border border-ir-06",
            !value && disabled && "border border-secondary-03",
          )}
        >
          <textarea
            className={twMerge(
              extraTextareaClassName,
              "h-full w-full rounded-lg bg-transparent py-3 pe-5 ps-5 outline-none focus:outline-none focus-visible:outline-none",
              disabled && "cursor-no-drop",
            )}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onClick={onClick}
            onChange={onChange}
            disabled={disabled}
            autoComplete={autoCompleteKey}
            maxLength={maxLength}
            minLength={minLength}
            required={required}
            placeholder={isFocused ? placeholder : ""}
            value={value}
            id={id}
            name={name}
            cols={cols}
            rows={rows}
          />
          <div
            onClick={() => setIsFocused(true)}
            className={twMerge(
              "absolute start-5 top-0 origin-top transform text-xs text-gray-500 transition-all",
              isFocused || value ? "-translate-y-[6px] text-gray-600" : `translate-y-[6px] ${LABELPOSITION[size]}`,
              errorMessage && "text-ir-06",
            )}
          >
            {label} {required && <span className={twMerge(errorMessage && "text-ir-06")}>*</span>}
          </div>
          <fieldset
            className={twMerge(
              "pointer-events-none absolute top-0 h-full w-full rounded-lg pe-3 ps-[16px]",
              extraClassName,
              isFocused && "border border-secondary-09",
              value && "border border-secondary-05",
              isFocused && errorMessage && "border border-ir-06",
              value && errorMessage && "border border-ir-06",
              value && disabled && "border border-secondary-03",
            )}
          >
            <legend className={twMerge("h-1 text-xs opacity-0", required ? "px-2" : "px-1")}>{label}</legend>
          </fieldset>
          {(isClose || elements) && (
            <div
              className={twMerge(
                "absolute end-3 flex items-center justify-center gap-1",
                size === "md" ? "inset-y-3" : "inset-y-2",
              )}
            >
              {isClose && value && (
                <Close
                  className="h-4 w-4 cursor-pointer text-secondary-05 ease-out hover:text-black"
                  onClick={() =>
                    onChange && onChange({ target: { name, value: "" } } as React.ChangeEvent<HTMLTextAreaElement>)
                  }
                />
              )}
              {elements && <div className="flex flex-row gap-1">{elements}</div>}
            </div>
          )}
        </div>
      </label>
      {!errorMessage && (message || maxLength) && (
        <div
          className={twMerge(
            "mt-1 flex",
            message && maxLength && "justify-between",
            maxLength && "justify-end",
            message && "justify-start",
          )}
        >
          {message && (
            <div className="flex items-center">
              {messageType !== "custom" ? MESSAGE_ICON[messageType] : customMessageIcon}
              <span className="px-1 text-xs text-secondary-07">{message}</span>
            </div>
          )}
          {maxLength && typeof value === "string" && (
            <span className="float-end text-xs text-secondary-07">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      )}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default Textarea;
