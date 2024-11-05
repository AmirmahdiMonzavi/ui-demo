import Image from "next/image";

import React from "react";

import { twMerge } from "tailwind-merge";

import { ModalPropsType, AlertIconsType } from "@/_types/modal";

import Button from "../button";
import Close from "../colorSVG/Close";
import { MODAL_SIZE, FOOTER_MODAL_TYPE } from "./modalConfig";

export type AlertModalPropsType = ModalPropsType;

export const alertIcons: AlertIconsType = {
  success: {
    icon: <Image src="/circleSuccessIcon.svg" alt="circle_success_icon" width={16} height={16} />,
    border: "border border-leaf-06",
  },
  error: {
    icon: <Image src="/circleErrorIcon.svg" alt="circle_error_icon" width={16} height={16} />,
    border: "border border-ir-06",
  },
  warning: {
    icon: <Image src="/circleWarningIcon.svg" alt="circle_warning_icon" width={16} height={16} />,
    border: "border border-fire-06",
  },
  general: {},
};

const AlertModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  footerType,
  footer,
  footerParentExtraClassName,
  variant = "general",
  size = "md",
  footerButtons = [],
}: AlertModalPropsType) => {
  const handleCloseModal: any = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClose(e);
  };

  const footerContent = {
    custom: footer,
    horizontal: footerButtons.map((x, i) => <Button variant={x.variant} key={i} title={x.title} onClick={x.onClick} />),
    vertical: footerButtons.map((x, i) => <Button variant={x.variant} key={i} title={x.title} onClick={x.onClick} />),
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-70"></div>

        <div
          className={twMerge(
            "z-10 max-w-screen-2xl rounded-2.5xl bg-white p-5",
            variant && alertIcons[variant]?.border,
            MODAL_SIZE[size],
          )}
        >
          <div className="mb-2 flex justify-end">
            <Close onClick={handleCloseModal} />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-3 px-3">
              {title && (
                <div className="flex w-full gap-2 text-start">
                  {variant && alertIcons && alertIcons[variant].icon}
                  <h1 className="text-base font-bold text-secondary-10">{title}</h1>
                </div>
              )}
              <div className="flex w-full gap-2 text-start">
                {!title && variant && alertIcons[variant]?.icon}
                <h2 className="text-sm font-normal text-secondary-10">{subtitle}</h2>
              </div>
            </div>
            <div className={twMerge("w-full", FOOTER_MODAL_TYPE[footerType], footerParentExtraClassName)}>
              {footerContent[footerType]}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AlertModal;
