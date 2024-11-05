import React, { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import { ModalPropsWithoutVariant } from "@/_types/modal";

import Button from "../button";
import Close from "../colorSVG/Close";
import { MODAL_SIZE, FOOTER_MODAL_TYPE } from "./modalConfig";

const EditModal = ({
  setIsOpen,
  title,
  footerType,
  footer,
  footerParentExtraClassName,
  size = "sm",
  footerButtons = [],
  children,
  contentExtraClassName,
}: ModalPropsWithoutVariant) => {
  const [isShowContent, setIsShowContent] = useState(false);

  useEffect(() => {
    setIsShowContent(true);
  }, []);

  const handleCloseModal = () => {
    setIsShowContent(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const footerContent = {
    custom: footer,
    horizontal: footerButtons.map((x, i) => (
      <Button variant={x.variant} key={i} title={x.title} onClick={x.onClick} disabled={x.disabled} />
    )),
    vertical: footerButtons.map((x, i) => (
      <Button variant={x.variant} key={i} title={x.title} onClick={x.onClick} disabled={x.disabled} />
    )),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={twMerge(
          "fixed inset-0 bg-black opacity-0 transition-opacity duration-100 ease-linear",
          isShowContent && "opacity-70",
        )}
      ></div>
      <div
        className={twMerge(
          "z-50 max-w-screen-2xl scale-0 transform rounded-2.5xl bg-white p-5 opacity-50 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
          isShowContent && "scale-100 opacity-100",
          MODAL_SIZE[size],
        )}
      >
        <div className="mb-2 flex cursor-pointer justify-end">
          <Close onClick={handleCloseModal} />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-3 px-3">
            {title && (
              <div className="flex w-full gap-2 text-start">
                <h1 className="text-base font-bold text-secondary-10">{title}</h1>
              </div>
            )}
            <div className={twMerge("flex w-full gap-2", contentExtraClassName)}>{children}</div>
          </div>
          <div className={twMerge("w-full", FOOTER_MODAL_TYPE[footerType], footerParentExtraClassName)}>
            {footerContent[footerType]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
