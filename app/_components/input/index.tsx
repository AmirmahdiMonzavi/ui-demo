import Image from "next/image";

import React, { useState } from "react";

import { twMerge } from "tailwind-merge";

import { InputPropsType } from "@/_types/Input";

import Close from "../colorSVG/Close";
import ErrorMessage from "./errorMessage";
import { SIZE, LABELPOSITION } from "./inputConfig";

const DEFUALT_VALUE = {
  text: "",
  number: 0,
  file: null,
  password: "",
};

const MESSAGE_ICON = {
  general: "",
  warning: <Image src="/outlinedWarning.svg" alt="outlined_warning_icon" width={16} height={16} />,
  error: <Image src="/triangleError.svg" alt="triangle_error_icon" width={16} height={16} />,
  success: <Image src="/circleSuccessIcon.svg" alt="circle_success_icon" width={16} height={16} />,
} as const;

const Input = ({
  size = "md",
  messageType = "general",
  type = "text",
  isClose = false,
  maxLength,
  isShowMaxLength = true,
  minLength,
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
  extraInputClassName,
  customMessageIcon,
  accept,
  multiple = false,
  onFocus,
  onBlur,
}: InputPropsType) => {
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
    <div className={twMerge("relative mb-5 mt-2", extraClassName, SIZE[size])}>
      <label htmlFor={id}>
        <div
          className={twMerge(
            "relative h-full w-full cursor-pointer rounded-lg text-sm",
            !value && !isFocused && "border border-secondary-05",
            !value && !isFocused && errorMessage && "border border-ir-06",
            !value && disabled && "border border-secondary-03",
            disabled && "cursor-no-drop",
          )}
        >
          <input
            multiple={multiple}
            id={id}
            name={name}
            type={type}
            value={value && value instanceof File ? "" : (value as string | number)}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onClick={onClick}
            onChange={onChange}
            placeholder={isFocused ? placeholder : ""}
            required={required}
            disabled={disabled}
            autoComplete={autoCompleteKey}
            maxLength={maxLength}
            minLength={minLength}
            accept={accept}
            className={twMerge(
              extraInputClassName,
              "h-full w-full rounded-lg bg-transparent py-3 pe-4 ps-5 outline-none focus:outline-none focus-visible:outline-none",
              type === "file" && "hidden",
              disabled && "cursor-no-drop",
            )}
          />
          {/* for show name of file */}
          {type === "file" && <div className="absolute start-5 top-[15px]">{value instanceof File && value?.name}</div>}
          <div
            onClick={() => {
              if (!disabled) setIsFocused(true);
            }}
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
              "pointer-events-none absolute -top-[6px] h-full w-full rounded-lg pe-3 ps-[16px]",
              isFocused && "border border-secondary-09",
              value && "border border-secondary-05",
              size === "md" ? "padding-block-start-1" : "padding-block-start-2",
              isFocused && errorMessage && "border border-ir-06",
              value && errorMessage && "border border-ir-06",
              value && disabled && "border border-secondary-03",
            )}
          >
            <legend className={twMerge("text-xs opacity-0", required ? "px-2" : "px-1")}>{label}</legend>
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
                    onChange &&
                    onChange({ target: { name, value: DEFUALT_VALUE[type] } } as React.ChangeEvent<HTMLInputElement>)
                  }
                />
              )}
              {elements && <div className="flex flex-row gap-1">{elements}</div>}
            </div>
          )}
        </div>
      </label>
      {!errorMessage && (messageType || maxLength) && (
        <div className="mt-1 flex justify-between">
          <div className="flex items-center">
            {messageType !== "custom" ? MESSAGE_ICON[messageType] : customMessageIcon}
            <span className="px-1 text-xs text-secondary-07">{message}</span>
          </div>
          {isShowMaxLength && maxLength && typeof value === "string" && (
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

export default Input;
