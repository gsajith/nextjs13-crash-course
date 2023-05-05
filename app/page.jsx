'use client';
import React, { useState, useEffect } from 'react'
import LoadingPage from "./loading";
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';

const HomePage = ({ }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      // Since this is a client component, we don't need an absolute URL here
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />
  }
  return (<div>
    <h1>Welcome to my site</h1>
    <CourseSearch gotSearchResults={(results) => setCourses(results)} />
    <Courses courses={courses} />
  </div>);
}

export default HomePage;
