import Image from "next/image";

import React from "react";

export type NoDataPlaceHolderPropsType = {
  img?: string;
  imgWidth?: number;
  imgHeight?: number;
  subtitle?: string;
};

const NoDataPlaceHolder = ({ img, imgWidth = 200, imgHeight = 200, subtitle }: NoDataPlaceHolderPropsType) => {
  return (
    <div className="mx-auto flex flex-col gap-7">
      <Image
        src={img || "/noTeamMember.svg"}
        alt="noData_icon"
        priority
        width={imgWidth}
        height={imgHeight}
        className="mx-auto"
      />
      {subtitle && <span className="text-center text-base font-normal text-secondary-06">{subtitle}</span>}
    </div>
  );
};

export default NoDataPlaceHolder;
