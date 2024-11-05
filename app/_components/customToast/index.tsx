import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { twMerge } from "tailwind-merge";

import { CustomToastProps } from "@/_types";

const toastStyles = {
  general: "border-storm-05",
  success: "border-leaf-06",
  error: "border-ir-06 ",
  warning: "border-fire-06",
};

const CustomToast = ({ message, type, buttonText, countdown, handleButtonClick }: CustomToastProps) => {
  const [count, setCount] = useState<number>(countdown || 0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalCountdown = countdown || 0;

  const circleRadius = 12;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const circlePercentage = (count / totalCountdown) * 100;
  const strokeDashoffset = ((100 - circlePercentage) / 100) * circleCircumference;

  useEffect(() => {
    if (!isPaused && count > 0) {
      timerRef.current = setTimeout(() => {
        setCount((prevCount) => {
          const newCount = prevCount - 1;
          if (newCount === 0) {
            toast.dismiss();
          }
          return newCount;
        });
      }, 1000);
      return () => {
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [count, totalCountdown, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        "flex min-h-12 items-center justify-between gap-2 rounded-xl border bg-white p-4 px-3 text-sm text-secondary-10",
        toastStyles[type],
      )}
    >
      <div className="flex flex-1 items-center gap-2">
        {countdown && (
          <div className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r={circleRadius} strokeWidth="2" fill="none" />
              <circle
                cx="18"
                cy="18"
                r={circleRadius}
                stroke="black"
                strokeWidth="2"
                fill="none"
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                className="transition-[stroke-dashoffset] duration-1000 ease-linear"
              />
            </svg>
            <p className="text-[10px]">{count}</p>
          </div>
        )}

        <p className="first-letter:uppercase">{message}</p>
      </div>
      {buttonText && (
        <button onClick={handleButtonClick} className="flex-shrink-0 text-sm text-twlt-06">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CustomToast;
