import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-WHITE-_100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-BLUE-_200" >
          Oops! 404
        </h1>
        <p className="text-xl mb-8 text-[#000444]">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-BLUE-_200 cursor-pointer text-WHITE-_100 rounded-lg"
        >
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
}
