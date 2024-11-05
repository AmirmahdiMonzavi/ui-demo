import { useTranslations } from "next-intl";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { BADGE_CARD_CONFIG, ColorCardFilterColorType } from "./cardFilterConfig";

type CardFilterPropsType = {
  name: string;
  subTitle: string;
  active: boolean;
  icon: JSX.Element;
  onClick: () => void;
  colorType: ColorCardFilterColorType;
};

const CardFilter = ({ icon, subTitle, name, onClick, active = false, colorType }: CardFilterPropsType) => {
  const t = useTranslations();

  return (
    <Link
      onClick={onClick}
      className={twMerge(
        "flex basis-1/5 cursor-pointer flex-row gap-2 rounded-2xl border px-4 py-5",
        BADGE_CARD_CONFIG[colorType]?.background,
        active && BADGE_CARD_CONFIG[colorType]?.border_active,
      )}
      href={{
        query: {
          tab: name,
        },
      }}
    >
      <div className="flex items-center">{icon}</div>
      <div className="flex flex-col items-start justify-center gap-2 px-3">
        <div
          className={twMerge(
            "text-base text-secondary-07",
            active && "font-bold " + BADGE_CARD_CONFIG[colorType]?.text_active,
          )}
        >
          {t(name)}
        </div>
        <div className="text-base text-secondary-06">{subTitle}</div>
      </div>
    </Link>
  );
};

export default CardFilter;
