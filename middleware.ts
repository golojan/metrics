import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/"],
};

export default async function middleware(req: NextRequest, res: any) {
  const { url, nextUrl } = req;
  const { hostname } = nextUrl;
  let newUrl = url;
  if (hostname == "metrics.ng") {
    return NextResponse.rewrite(`${newUrl}`);
  }

  const response = await fetch(process.env.DOMAIN + `/api/domains/${hostname}`);
  const result = await response.json();
  if (result.status) {
    newUrl = `${url}universities/${result.domain}`;
  }

  return NextResponse.rewrite(`${newUrl}`);
}
