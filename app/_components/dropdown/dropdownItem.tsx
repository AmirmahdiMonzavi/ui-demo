import { twMerge } from "tailwind-merge";

import Check from "../colorSVG/Check";

type DropdownItemPropsType = {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  extraClassName?: string;
  onClick: () => void;
};

const DropdownItem = ({ label, icon, isActive, extraClassName, onClick }: DropdownItemPropsType) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "flex w-full items-center justify-between rounded-lg px-2 py-4 text-base hover:bg-primary-02 hover:text-primary-08",
        extraClassName,
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
      {isActive && <Check className="text-primary-06" />}
    </div>
  );
};

export default DropdownItem;
