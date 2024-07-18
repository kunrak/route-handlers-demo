import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();
    const theme = request.cookies.get("theme")
    cookies().set("resultsPerPage", "2");

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    console.log(theme)
    console.log(cookies().get("resultsPerPage"))

    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    });
}