import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen p-2">
      <header className="container mx-auto py-5 mb-3">
        <h1 className="text-2xl font-bold text-purple-500 text-center">
          VD LearnNest
        </h1>
      </header>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-10 lg:py-16 px-3 lg:px-5">
        {/* Hero Text Section */}
        <div className="hero-text text-center lg:text-left lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Welcome to VD LearnNest</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Are you ready to advance your skills with expert IT coaching? At VD
            LearnNest, we specialize in delivering world-class courses tailored
            to your needs. Learn from top industry professionals through live
            sessions, practical projects, and hands-on experience. Whether
            you're a beginner or an advanced learner, we have the right course
            for you. Join our growing community of successful students and
            unlock your potential. Enroll now to start your journey toward a
            brighter future in technology!
          </p>
          <div className="btn-group space-x-4 mt-4">
            <button
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600"
              onClick={() => navigate("/Contact")}>
              Connect Now
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero-image lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2G2sBqTmxaZWQYlWlLE0eqtVnOVlZRVxQBg&s"
            alt="Hero"
            className="w-3/4 lg:w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-200 py-6 px-2 lg:px-6 mt-2">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-2">
            <h3 className="text-3xl font-bold text-purple-500">50+</h3>
            <p className="mt-2  font-bold text-blue-500">
              Registered Companies
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-3xl font-bold text-purple-500">1000+</h3>
            <p className="mt-2  font-bold text-blue-500">Students Placed</p>
          </div>
          <div className="p-2">
            <h3 className="text-3xl font-bold text-purple-500">24/7</h3>
            <p className="mt-2  font-bold text-blue-500">Availability</p>
          </div>
          <div className="p-2">
            <h3 className="text-3xl font-bold text-purple-500">500+</h3>
            <p className="mt-2  font-bold text-blue-500">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
