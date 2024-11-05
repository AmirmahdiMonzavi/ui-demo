import React, { useState } from "react";

import { twMerge } from "tailwind-merge";

import { useLocale } from "@/_customHooks/useLocale";

interface SwitcherPropsYpe {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Switcher = ({ defaultChecked = false, onChange, disabled }: SwitcherPropsYpe) => {
  const [checked, setChecked] = useState(defaultChecked);
  const { locale } = useLocale();

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const switcherColorStyles = {
    default: {
      checked: `bg-primary-06 hover:bg-primary-07`,
      notChecked: `bg-storm-04 hover:bg-storm-05`,
    },
    disabled: {
      checked: `bg-primary-04`,
      notChecked: `bg-storm-03`,
    },
  };

  const generateSwitcherColorStyles = ({ checked, disabled = false }: { checked: boolean; disabled?: boolean }) => {
    return !disabled
      ? switcherColorStyles["default"][checked ? "checked" : "notChecked"]
      : switcherColorStyles["disabled"][checked ? "checked" : "notChecked"];
  };

  return (
    <div className="flex items-center">
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" checked={checked} onChange={handleChange} className="hidden" disabled={disabled} />
        <span
          className={twMerge(
            "h-4 w-10 rounded-full transition-colors duration-300",
            generateSwitcherColorStyles({ checked: checked, disabled: disabled }),
          )}
        >
          <span
            className={twMerge(
              "inline-block h-5 w-5 -translate-y-[2px] transform rounded-full bg-white shadow-e4 transition-transform duration-300",
              locale === "/en"
                ? checked
                  ? "translate-x-[21px]"
                  : "-translate-x-0"
                : checked
                  ? "-translate-x-[21px]"
                  : "translate-x-0",
            )}
          >
            <span
              className={twMerge(
                "inline-block h-1 w-1 transform rounded-full shadow-e4 transition-colors duration-300",
                generateSwitcherColorStyles({ checked: checked, disabled: disabled! }),
                checked ? "h-3" : "-translate-y-[4px]",
                locale === "/en" ? `${checked && `-translate-y-[1px]`} translate-x-2` : "-translate-x-2",
              )}
            ></span>
          </span>
        </span>
      </label>
    </div>
  );
};

export default Switcher;
