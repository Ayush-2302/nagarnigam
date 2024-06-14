import { NextResponse } from "next/server";

export const middleware = (request) => {
  const authToken = request.cookies.get("authToken")?.value;
  // console.log(authToken, "midware Authtoken");

  if (request.nextUrl.pathname.startsWith("/garbagecollectordash")) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/signup")) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
};
