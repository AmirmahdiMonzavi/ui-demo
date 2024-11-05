import { twMerge } from "tailwind-merge";

export type SpinnerPropsType = {
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  extraClassName?: string;
};

const Spinner = ({ theme = "light", size = "md", extraClassName }: SpinnerPropsType) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-6 h-6 border-2";
      case "md":
        return "w-10 h-10 border-4";
      case "lg":
        return "w-14 h-14 border-8";
      default:
        return "w-6 h-6 border-2";
    }
  };

  const getColorClass = () => {
    switch (theme) {
      case "dark":
        return "border-white border-b-transparent";
      default:
        return "border-primary-07 border-b-transparent";
    }
  };

  return (
    <div
      className={twMerge("mx-auto animate-spin rounded-full", getSizeClass(), getColorClass(), extraClassName)}
    ></div>
  );
};

export default Spinner;
