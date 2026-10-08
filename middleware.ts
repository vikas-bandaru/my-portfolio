import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /studio routes (except /studio/login)
  if (pathname.startsWith("/studio") && !pathname.startsWith("/studio/login")) {
    const sessionCookie = request.cookies.get("vb_studio_session");
    if (!sessionCookie?.value) {
      const loginUrl = new URL("/studio/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
