import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const dogName = request.nextUrl.searchParams.get("name");
    const response = await fetch(`https://dog.ceo/api/breed/${dogName}/images`);

    const data = await response.json();

    if (data.status !== "success")
      return new NextResponse("Something went wrong", { status: 500 });
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error)
      return new NextResponse(error.message, { status: 500 });
    else return new NextResponse("Something went wrong", { status: 500 });
  }
}
