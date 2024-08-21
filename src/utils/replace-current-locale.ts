import { locales } from "@/globals/data";
import type { Locale } from "@/types/page-lang-param";

type ReplaceCurrentLocaleProps = {
  pathname: string;
  targetLang: Locale;
};

export const replaceCurrentLocale = ({
  pathname,
  targetLang,
}: ReplaceCurrentLocaleProps) => {
  const pathSegments = pathname.split("/").filter(Boolean);

  const shouldReplace = locales.includes(pathSegments[0] as Locale);
  if (shouldReplace) {
    pathSegments[0] = targetLang;
  }

  if (!shouldReplace) {
    pathSegments.unshift(targetLang);
  }

  const newPathname = `/${pathSegments.join("/")}`;
  return newPathname;
};
