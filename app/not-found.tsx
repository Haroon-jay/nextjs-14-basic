import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
    </div>
  );
};

export default NotFound;
