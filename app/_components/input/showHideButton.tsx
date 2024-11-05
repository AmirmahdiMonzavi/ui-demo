import { twMerge } from "tailwind-merge";

import Eye from "../colorSVG/Eye";
import EyeSlash from "../colorSVG/EyeSlash";

export type showHideButtonPropsType = {
  visible: boolean;
  onClick?: () => void;
  extraClassName?: string;
};
function ShowHideButton({ visible, onClick, extraClassName }: showHideButtonPropsType) {
  const className = "cursor-pointer text-secondary-05 ease-out hover:text-black";
  return visible ? (
    <EyeSlash onClick={onClick} className={twMerge(className, extraClassName)} />
  ) : (
    <Eye onClick={onClick} className={twMerge(className, extraClassName)} />
  );
}

export default ShowHideButton;
