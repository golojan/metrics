import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/"],
};

export default async function middleware(req: NextRequest, res: any) {
  const { url, nextUrl } = req;
  const { hostname } = nextUrl;
  const baseUrl = process.env.DOMAIN;
  let newUrl = baseUrl;
  if (hostname == "metrics.ng") {
    return NextResponse.rewrite(`${newUrl}`);
  }
  try {
    const response = await fetch(
      process.env.DOMAIN + `/api/domains/${hostname}`
    );
    const result = await response.json();
    const { status, id, domain } = result;
    if (status) {
      newUrl = `${baseUrl}/universities/${domain}`;
    }
  } catch (error) {
    console.log(error);
  }
  return NextResponse.rewrite(`${newUrl}`);
}
