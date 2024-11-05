import { toast } from "react-toastify";

import { CustomToastProps } from "@/_types";

import CustomToast from "./index";

const showToast = ({ type, message, buttonText, countdown, handleButtonClick }: CustomToastProps) => {
  toast(
    <CustomToast
      message={message}
      type={type}
      buttonText={buttonText}
      countdown={countdown}
      handleButtonClick={handleButtonClick}
    />,
    {
      autoClose: !countdown && 5000,
      hideProgressBar: true,
      pauseOnFocusLoss: false,
      closeButton: false,
      draggable: false,
      pauseOnHover: true,
      className: () => "",
    },
  );
};

export default showToast;
