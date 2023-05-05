import { NextResponse } from "next/server"

export async function GET(request) {
  // Example: Return a JSON:
  // return NextResponse.json({ message: "Hello JSON!" })

  // Return a string
  return new NextResponse('Hello from the API route!');
}
