import { ChangeEvent } from "react";

export type InputPropsType = (
  | {
      type: "file";
      value: File | string;
    }
  | {
      type: "text" | "password";
      value: string;
    }
  | {
      type: "number";
      value: number;
    }
) & {
  elements?: React.ReactNode;
  customMessageIcon?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
  size?: "md" | "sm";
  messageType?: "success" | "warning" | "custom" | "general";
  id: string;
  label: string;
  message?: string;
  accept?: string;
  errorMessage?: string;
  name: string;
  autoCompleteKey?: string;
  placeholder?: string;
  extraClassName?: string;
  extraInputClassName?: string;
  isShowMaxLength?: boolean;
  required?: boolean;
  disabled?: boolean;
  visible?: boolean;
  multiple?: boolean;
  isClose?: boolean;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

export type PasswordPropsType = Omit<InputPropsType, "type" | "value"> & {
  value: string;
};

export type CheckboxInputPropsType = Omit<InputPropsType, "type" | "value"> & {
  value: boolean;
};

export type RadioInputPropsType = Omit<InputPropsType, "type" | "value"> & {
  value: boolean;
};
