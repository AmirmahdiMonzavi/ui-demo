import { twMerge } from "tailwind-merge";

type PageButtonPropsType = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  extraClassName?: string;
};

const PageButton = ({ children, onClick, disabled = false, extraClassName }: PageButtonPropsType) => {
  return (
    <button
      className={twMerge("h-10 w-10 cursor-pointer rounded-md", extraClassName)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PageButton;
