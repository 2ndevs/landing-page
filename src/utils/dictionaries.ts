import "server-only";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/page-lang-param";
import { getLocale } from "./get-locale";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  pt: () =>
    import("../../dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale?: Locale): Promise<Dictionary> => {
  const lang = locale ?? (await getLocale());

  return dictionaries?.[lang]?.();
};
