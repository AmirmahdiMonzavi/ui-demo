import { RouteDataType } from "@/_types";

export const formatWithCommas = (number: number) => new Intl.NumberFormat("en-US").format(number);

export const isDeepEqual = (obj1: unknown, obj2: unknown): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  
  for (let key of keys1) {
    if (
      !keys2.includes(key) ||
      !isDeepEqual((obj1 as Record<string, unknown>)[key], (obj2 as Record<string, unknown>)[key])
    ) {
      return false;
    }
  }

  return true;
};

export const isEmpty = (value: unknown): boolean => {
  return (
    value === null ||
    value === undefined ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0)
  );
};

export const removeEmptyParams = (params: { [key: string]: any }) => {
  for (let key in params) {
    if (isEmpty(params[key as keyof typeof params])) {
      delete params[key as keyof typeof params];
    }
  }
  return params;
};

export const separateCamelCase = (str: string) => {
  return str?.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
};

export const camelToSnakeCase = (str: string) => {
  return str?.replace(/([A-Z])/g, "_$1").toLowerCase();
};

export const convertToReadableText = (str: string) => {
  return str?.toLowerCase().replace(/_/g, " ");
};

export const deleteDash = (str: string) => {
  return str?.replace(/-/g, " ");
};

export const convertToCapitalized = (word: string) => {
  if (!word) return "";
  const lowerCasedWord = word.toLowerCase();
  return lowerCasedWord.charAt(0).toUpperCase() + lowerCasedWord.slice(1);
};

export const getValueOrUnknown = (value: string | number | boolean | null, prefix?: string): string => {
  return typeof value === "boolean"
    ? `${value}`
    : typeof value === "number"
      ? formatWithCommas(value)
      : value?.toString().trim()
        ? prefix
          ? `${prefix}${value}`
          : `${value}`
        : "Unknown";
};

export const infiniteScrollConfig = {
  initialPageParam: 0,
  getNextPageParam: (lastPage: { pageNumber: number; totalPages: number }) =>
    lastPage?.pageNumber < lastPage?.totalPages - 1 ? lastPage.pageNumber + 1 : undefined,
};

export const serializeParams = (params: { [key: string]: unknown }) => {
  return (Object.keys(params) as (keyof unknown)[])
    .map((key) => {
      const value = params[key];
      // Handle arrays by serializing them as repeated keys (e.g. filter=sports&filter=tech)
      if (Array.isArray(value)) {
        return value.map((item) => `${key}=${encodeURIComponent(item)}`).join("&");
      }
      return value && `${key}=${encodeURIComponent(String(value))}`;
    })
    .filter(Boolean)
    .join("&");
};

export const formatNumber = (value: number): string => {
  if (value >= 1_000_000) {
    const formatted = (value / 1_000_000).toFixed(2);
    return removeTrailingZeros(formatted) + "M";
  } else if (value >= 1_000) {
    const formatted = (value / 1_000).toFixed(2);
    return removeTrailingZeros(formatted) + "K";
  } else {
    return value.toString();
  }
};

export const removeTrailingZeros = (numStr: string): string => {
  return numStr.replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
};

export const localizeNumber = (number: string, locale: string) => {
  return new Intl.NumberFormat(locale === "/fa" ? "fa-IR" : "en-US").format(Number(number));
};

export const extractLabelFromRoute = (routeData: RouteDataType, locale: "/en" | "/fa", t: Function): string => {
  const { route } = routeData;
  const cleanedRoute = route.replace("/dashboard", "");
  const parts = cleanedRoute.split("/").filter((part) => part);
  const formatForTranslation = (part: string) => part.replace(/-/g, "_").toLowerCase();
  let label: string;

  if (parts[0] === "support" && parts[1]) {
    const supportNumber = localizeNumber(parts[1], locale);
    label = t("support_ticket_number", { number: supportNumber });
  } else if (parts.includes("analysis")) {
    label = t(`${formatForTranslation(parts[1])}`);
  } else {
    label =
      parts.length > 1
        ? t(`${formatForTranslation(parts[0])}_${formatForTranslation(parts[1])}`)
        : t(formatForTranslation(parts[parts.length - 1]));
  }

  return label;
};

export const deleteObjectProperty = (input: string, obj: { [key: string]: any }) => {
  const parts = input.split("-");
  if (parts.length === 2) {
    const [key, indexStr] = parts;
    const index = parseInt(indexStr, 10);
    if (obj[key] && Array.isArray(obj[key]) && !isNaN(index)) {
      obj[key].splice(index, 1);
    }
  } else {
    const key = parts[0];
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  return obj;
};
