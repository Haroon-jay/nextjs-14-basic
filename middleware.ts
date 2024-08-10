import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/", "/form"];
export function middleware(request: NextRequest) {
  // check if jwt cookie is present
  const jwt = request.cookies.get("jwt")?.value;
  const currentPath = request.nextUrl.pathname;

  if (
    !jwt &&
    currentPath !== "sign-in" &&
    protectedRoutes.includes(currentPath)
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  } else if (jwt && currentPath === "/sign-in") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
