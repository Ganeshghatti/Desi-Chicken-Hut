import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const user = req.auth?.user; 
  const path = req.nextUrl.pathname;

  const isDashboardRoute = path.startsWith("/dashboard");

  if (isDashboardRoute) {
    if (!user || user.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next(); 
});

export const config = {
  matcher: [
    "/dashboard/:path*", 
  ],
};
