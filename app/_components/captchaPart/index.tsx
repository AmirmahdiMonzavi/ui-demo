import { useTranslations } from "next-intl";
import Image from "next/image";

import React, { ChangeEvent } from "react";

import { twMerge } from "tailwind-merge";

import Refresh from "../colorSVG/Refresh";
import Input from "../input";

export type CaptchaPartPropsType = {
  captchaImage: string;
  handleRefreshCaptchaClicked: () => void;
  handleCaptchaInput: (e: ChangeEvent<HTMLInputElement>) => void;
  customClass?: string;
  value: string;
  error?: string;
};

const CaptchaPart = ({
  captchaImage,
  handleRefreshCaptchaClicked,
  handleCaptchaInput,
  customClass,
  value,
  error,
}: CaptchaPartPropsType) => {
  const t = useTranslations();

  return (
    <div className={twMerge("flex w-full items-center justify-between gap-3", customClass)}>
      <div className="h-[34.7px] w-[119px]">
        <Image
          src={captchaImage === "" ? "/captchaBackground.svg" : `data:image/png;base64,${captchaImage}`}
          alt="captcha-image"
          width={119}
          height={34.7}
        />
      </div>
      <Refresh className="h-5 w-5 text-secondary-07" onClick={handleRefreshCaptchaClicked} />
      <Input
        id="captcha"
        name="captcha"
        type="text"
        label={t("captcha")}
        value={value}
        errorMessage={error}
        onChange={handleCaptchaInput}
        required
        extraClassName="my-2"
      />
    </div>
  );
};

export default CaptchaPart;
