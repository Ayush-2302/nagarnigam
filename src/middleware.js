import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (request.nextUrl.pathname.startsWith("/dashboard/garbagecollector")) {
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
