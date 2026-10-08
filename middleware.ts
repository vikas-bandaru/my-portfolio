import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /studio routes (except /studio/login and /studio/not-found)
  if (
    pathname.startsWith("/studio") &&
    !pathname.startsWith("/studio/login") &&
    !pathname.startsWith("/studio/not-found")
  ) {
    const sessionCookie = request.cookies.get("vb_studio_session");
    if (!sessionCookie?.value) {
      // Stealth Mode: Redirect unauthenticated visitors to a temporary 404 page that redirects to /
      const notFoundUrl = new URL("/studio/not-found", request.url);
      return NextResponse.redirect(notFoundUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
