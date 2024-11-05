import React, { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import { useLocale } from "@/_customHooks/useLocale";
import { ModalPropsWithoutVariant } from "@/_types/modal";

import Button from "../button";
import Close from "../colorSVG/Close";
import { MODAL_SIZE, FOOTER_MODAL_TYPE } from "./modalConfig";

const AddModal = ({
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
  const { getDirection } = useLocale();

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
      <Button variant={x.variant} key={i} title={x.title} onClick={x.onClick} isLoading={x.isLoading} />
    )),
    vertical: footerButtons.map((x, i) => (
      <Button variant={x.variant} key={i} title={x.title} onClick={x.onClick} isLoading={x.isLoading} />
    )),
  };

  return (
    <div className={twMerge("fixed end-5 top-5 z-50", MODAL_SIZE[size])}>
      <div
        className={twMerge(
          "fixed inset-0 bg-black opacity-0 transition-opacity duration-100 ease-linear",
          isShowContent && "opacity-70",
        )}
      ></div>
      <div
        className={twMerge(
          "z-50 flex w-full transform flex-col items-end opacity-50 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
          getDirection() === "ltr" ? "translate-x-full" : "-translate-x-full",
          isShowContent && "translate-x-0 opacity-100",
        )}
      >
        <div className="relative w-full max-w-screen-2xl rounded-2.5xl bg-white p-5">
          <div className="mb-2 flex justify-end">
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
          </div>
        </div>
        <div
          className={twMerge(
            "mb-3 mt-5 w-full max-w-screen-2xl",
            FOOTER_MODAL_TYPE[footerType],
            footerParentExtraClassName,
          )}
        >
          {footerContent[footerType]}
        </div>
      </div>
    </div>
  );
};

export default AddModal;
