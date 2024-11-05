import { ButtonPropsType } from "./button";
import { GeneralDispatch } from "./general";

export type AlertKindType = "success" | "error" | "warning" | "general";

export type ModalSizeType = "sm" | "md" | "lg" | "xl";

export type FooterType = "vertical" | "horizontal" | "custom";

export type AlertInfoType = { icon?: JSX.Element; border?: string };

export type AlertIconsType = Record<AlertKindType, AlertInfoType>;

export type DispatchSetIsOpenType = GeneralDispatch<boolean>;

export type ModalPropsWithoutVariant = Omit<ModalPropsType, "variant" | "isOpen" | "onClose"> & {
  children: React.ReactNode;
  contentExtraClassName?: string;
  setIsOpen: DispatchSetIsOpenType;
};

export type ModalPropsType = {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
  subtitle?: string;
  footerParentExtraClassName?: string;
  variant?: AlertKindType;
  size?: ModalSizeType;
  footerType: FooterType;
  footer?: React.ReactNode;
  footerButtons: ButtonPropsType[];
};
