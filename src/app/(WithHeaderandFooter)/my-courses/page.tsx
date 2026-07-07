import React from "react";

export default function MyCoursesPage() {
  return (
    <div className="p-4">
        <div className="mx-auto w-96 shadow-lg p-6 rounded-lg text-center bg-white">

      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
      <p className="text-gray-600 mb-5">List of courses the user has purchased will be displayed here.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        View Courses
      </button>
        </div>
    </div>
  );
}