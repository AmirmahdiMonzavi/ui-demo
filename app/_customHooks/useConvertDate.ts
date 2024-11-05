import { useLocale } from "./useLocale";

export const datetimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

export const useConvertDate = () => {
  const { locale } = useLocale();

  const convertDate = (
    date: string,
    options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      weekday: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  ): string => {
    const language = locale === "/en" ? "en-US" : "fa-IR";
    const { timeZone: currentTimeZone } = Intl.DateTimeFormat().resolvedOptions();

    return date && new Date(date).toLocaleDateString(language, { ...options, timeZone: currentTimeZone });
  };

  return { convertDate };
};
