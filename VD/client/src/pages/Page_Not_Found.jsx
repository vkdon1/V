import React from "react";
import { useNavigate } from "react-router-dom";

const Page_Not_Found = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-blue-300 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={() => navigate("/")}>
          Go to Home
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
          onClick={() => navigate("/Contact")}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Page_Not_Found;
