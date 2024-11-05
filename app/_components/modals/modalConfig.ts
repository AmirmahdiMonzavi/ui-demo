import { FooterType, ModalSizeType } from "@/_types/modal";

export const MODAL_SIZE = {
  sm: "w-[90%] sm:w-[500px]",
  md: "w-[90%] md:w-[800px]",
  lg: "w-[90%] lg:w-[1000px]",
  xl: "w-[90%] xl:w-[1250px]",
} as Record<ModalSizeType, string>;

export const FOOTER_MODAL_TYPE = {
  vertical: "flex gap-3 justify-end",
  horizontal: "grid grid-flow-row auto-rows-max gap-2",
  custom: "",
} as Record<FooterType, string>;
