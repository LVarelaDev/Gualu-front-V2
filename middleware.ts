export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/users/:path*",
    "/companies/:path*",
    "/contracts/:path*",
    "/teams/:path*",
  ],
};
