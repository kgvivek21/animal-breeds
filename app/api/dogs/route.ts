import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");

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
