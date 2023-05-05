import courses from "../data.json"
import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const courseName = searchParams.get('courseName');
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(courseName.toLowerCase())
  });
  return NextResponse.json(filteredCourses);
}
