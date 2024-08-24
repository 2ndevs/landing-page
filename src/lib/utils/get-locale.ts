"use server";

import type { Locale } from "@/types/page-lang-param";
import { headers as nextHeaders } from "next/headers";

export const getLocale = async () => {
  const headers = nextHeaders();
  return headers.get("locale") as Locale;
};
