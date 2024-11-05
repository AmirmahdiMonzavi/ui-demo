import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type Tab = {
  key: string;
  label: string;
  children: React.ReactNode;
};

export interface Option {
  value: string | number;
  label: string;
}

export type GeneralDispatch<T> = Dispatch<SetStateAction<T>>;

export type SvgIconPropsType = {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export type RouteDataType = {
  route: string;
  sessionStart?: boolean;
  timeStamp?: Date;
  queryParams?: Record<string, string>;
  label?: string;
};

export type CustomToastProps = {
  message: string;
  type: "general" | "success" | "error" | "warning";
  buttonText?: string;
  countdown?: number;
  handleButtonClick?: () => void;
};
