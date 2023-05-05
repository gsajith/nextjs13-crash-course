'use client';
import { useState } from "react";

const CourseSearch = ({ gotSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/courses/search?courseName=${query}`);
    const courses = await response.json();
    gotSearchResults(courses);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  )
}

export default CourseSearch
