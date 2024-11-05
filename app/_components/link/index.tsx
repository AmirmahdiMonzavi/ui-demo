import NextLink from "next/link";

import React from "react";

import { useLocale } from "@/_customHooks/useLocale";

export type LinkPropsType = {
  href: string;
  title?: string;
  children: React.ReactNode | string;
  className?: string;
  isExternal?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  onDoubleClick?: React.MouseEventHandler<HTMLAnchorElement>;
};
const Link = ({
  href,
  title,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  onDoubleClick,
  isExternal = false,
}: LinkPropsType) => {
  const { addLocaleToUrl } = useLocale();
  const finalUrl = !isExternal ? addLocaleToUrl(href) : href;
  const finalTarget = !isExternal ? "" : "_blank";
  return (
    <NextLink
      href={finalUrl}
      title={title}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onDoubleClick}
      target={finalTarget}
    >
      {children}
    </NextLink>
  );
};

export default Link;
