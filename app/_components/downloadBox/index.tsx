import { useTranslations } from "next-intl";
import Image from "next/image";

import React from "react";

import { twMerge } from "tailwind-merge";

import { formatBytes } from "@/_utils/fileConverter";

import Download from "../colorSVG/Download";
import Spinner from "../spinner";

export type DownloadBoxPropsType = {
  isLoading: boolean;
  extraClassName?: string;
  fileName?: string;
  fileSize?: number;
  handleDownloadFile: React.MouseEventHandler<HTMLDivElement>;
};

const DownloadBox = ({ isLoading, extraClassName, fileSize, fileName, handleDownloadFile }: DownloadBoxPropsType) => {
  const t = useTranslations();

  return (
    <div className={twMerge("flex", extraClassName)}>
      <div className={twMerge("flex rounded-b-lg rounded-e-lg border-2 border-primary-02")}>
        <div className="flex w-60 gap-3 bg-primary-02 p-[14px]">
          <Image src="/file.svg" width={28} height={28} alt="file-icon" className="row-span-2" />
          <div className="flex flex-col">
            <div className="w-44 overflow-hidden whitespace-nowrap">
              <p>{fileName || t("result")}</p>
            </div>
            <span className="text-sm font-normal text-secondary-07">{formatBytes(fileSize!) || "0 KB"}</span>
          </div>
        </div>
        <div className="m-auto mx-5 cursor-pointer" onClick={handleDownloadFile}>
          {isLoading ? <Spinner /> : <Download className="text-primary-07" />}
        </div>
      </div>
    </div>
  );
};

export default DownloadBox;
