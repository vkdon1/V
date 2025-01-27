import React, { useState } from "react";

const Login = () => {
  const [Data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Data); // Log login data to console
  };
  const Submit = () => {
    alert("Login successful");
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-500">VD LearnNest</h1>
        </header>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section (Image) */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src="https://img.freepik.com/premium-vector/3d-user-login-form-page_169241-6920.jpg" // Replace with your image URL
              alt="Login Illustration"
              className="w-full max-w-sm lg:max-w-md rounded-xl"
            />
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-14 text-purple-500 text-center">
              Login
            </h2>
            <form className="space-y-10" onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your username"
                  value={Data.username}
                  onChange={handleInput}
                />
              </div>
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  value={Data.password}
                  onChange={handleInput}
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={Submit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
