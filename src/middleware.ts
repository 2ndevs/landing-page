import { locales } from "@/globals/data";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";

const getLocale = (request: NextRequest) => {
  const acceptLanguages = {
    "accept-language":
      request.headers.get("accept-language") || "en-US,en;q=0.5",
  };
  const languages = new Negotiator({ headers: acceptLanguages }).languages();
  const defaultLocale = "en";

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const extension = pathname.split(".")?.pop()?.toLowerCase();
  if (["png", "jpeg", "jpg"].includes(extension ?? "")) {
    return NextResponse.next({ headers: { locale: "en" } });
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  const locale = getLocale(request);

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl, { headers: { locale } });
  }

  const localeInPathName =
    locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    ) || "en";

  return NextResponse.next({ headers: { locale: localeInPathName } });
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
