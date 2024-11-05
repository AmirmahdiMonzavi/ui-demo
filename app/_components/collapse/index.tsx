import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import ArrowDown from "../colorSVG/ArrowDown";
import ArrowUp from "../colorSVG/ArrowUp";

export type CollapsePropsType = {
  title: string | React.ReactNode;
  buttonExtraClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  isDefaultOpen?: boolean;
  isShowIcons?: boolean;
  isActive?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  collapseParentExtraClassName?: string;
};
const Collapse = ({
  title,
  buttonExtraClassName,
  contentClassName,
  children,
  openIcon,
  closeIcon,
  isActive,
  isDefaultOpen,
  isShowIcons = false,
  titleClassName,
  onMouseEnter,
  onMouseLeave,
  collapseParentExtraClassName,
}: CollapsePropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDefaultOpen) {
      setIsOpen(true);
    } else setIsOpen(false);
  }, [isDefaultOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={collapseParentExtraClassName}>
      <button
        className={twMerge(
          "flex w-full items-center justify-between",
          !isDefaultOpen && isActive && "rounded-md bg-primary-02 text-primary-07",
          buttonExtraClassName,
        )}
        onClick={toggleMenu}
      >
        <span className={titleClassName}>{title}</span>
        {isShowIcons && (
          <>{isOpen ? openIcon || <ArrowUp className="h-4 w-4" /> : closeIcon || <ArrowDown className="h-4 w-4" />}</>
        )}
      </button>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
};

export default Collapse;
