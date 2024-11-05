import { usePathname, useRouter } from "next/navigation";

export type localeType = "en" | "fa";

export type GenerateParamsUrlType = { pathname?: string; params?: any };

export function useLocale() {
  const router = useRouter();
  const pathName = usePathname();

  const locale: "/en" | "/fa" = pathName.startsWith("/fa") ? "/fa" : "/en";

  const addLocaleToUrl = (url: string) => {
    let newUrl = "";
    if (url.startsWith("fa") || url.startsWith("en")) {
      newUrl = url;
    } else {
      newUrl = locale + url;
    }
    return newUrl;
  };

  const getPathNameWithoutLocale = () => {
    if (pathName.startsWith("/en") || pathName.startsWith("/fa")) return pathName.slice(3);
    return pathName;
  };

  const replaceWithLocale = (url: string) => {
    router.replace(addLocaleToUrl(url));
  };

  const pushWithLocale = (url: string) => {
    router.push(addLocaleToUrl(url));
  };

  const getDirection = () => {
    return locale === "/en" ? "ltr" : "rtl";
  };

  const switchLocale = (locale: string, queryParams?: Record<string, any>) => {
    if (queryParams) {
      const queryString = generateParamsUrl({ pathname: getPathNameWithoutLocale(), params: queryParams });
      router.replace(`${locale}${queryString}`);
    } else {
      router.replace(locale + getPathNameWithoutLocale());
    }
  };

  const generateParamsUrl = ({ pathname, params }: GenerateParamsUrlType) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).map(([key, value]) => searchParams.set(key, value as string));
    return `${pathname || getPathNameWithoutLocale()}?${searchParams.toString()}`;
  };

  const replacePathWithQueryParams = ({ pathname, params }: GenerateParamsUrlType) => {
    const newUrl = generateParamsUrl({
      pathname,
      params,
    });
    replaceWithLocale(newUrl);
  };

  const pushPathWithQueryParams = ({ pathname, params }: GenerateParamsUrlType) => {
    const newUrl = generateParamsUrl({
      pathname,
      params,
    });
    pushWithLocale(newUrl);
  };

  // this part should be change in task FTORCH-9
  const createUrl = (pathname: string, params: any) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).map(([key, value]) => searchParams.set(key, value as string));
    return `${pathname}?${searchParams.toString()}`;
  };

  return {
    locale,
    addLocaleToUrl,
    replaceWithLocale,
    pushWithLocale,
    getDirection,
    getPathNameWithoutLocale,
    switchLocale,
    replacePathWithQueryParams,
    createUrl,
    pushPathWithQueryParams,
  };
}
