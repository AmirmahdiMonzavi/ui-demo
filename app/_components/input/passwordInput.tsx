import React, { useState } from "react";

import { PasswordPropsType } from "@/_types/Input";

import Input from ".";
import ShowHideButton from "./showHideButton";

const PasswordInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  autoCompleteKey,
  errorMessage,
  isClose,
  elements,
  messageType,
  message,
  maxLength,
  isShowMaxLength,
}: PasswordPropsType) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChangeVisibility = () => {
    setPasswordVisible((passwordVisible) => !passwordVisible);
  };

  return (
    <Input
      type={passwordVisible ? "text" : "password"}
      label={label}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      disabled={disabled}
      autoCompleteKey={autoCompleteKey}
      errorMessage={errorMessage}
      isClose={isClose}
      messageType={messageType}
      message={message}
      maxLength={maxLength}
      isShowMaxLength={isShowMaxLength}
      elements={
        <div className="px-1">
          <ShowHideButton visible={passwordVisible} onClick={handleChangeVisibility} />
          {elements}
        </div>
      }
    />
  );
};

export default PasswordInput;
