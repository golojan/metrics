import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const host = request.headers.get("host");
  return NextResponse.next();
};
export const config = {
  matcher: ["/:path*"],
};
