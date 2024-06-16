import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
  const cookiesHeader = cookies();
  const authToken = cookiesHeader.get("authToken")?.value;
  console.log(authToken);

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
