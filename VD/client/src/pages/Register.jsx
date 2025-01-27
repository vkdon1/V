import React, { useState } from "react";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target; // Extract name and value from the event target
    setUser({
      ...user,
      [name]: value, // Dynamically set the state based on the input's name
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user); // Output the form data to the console
    // CONNECT OUR REGISTER PAGE WITH MONGODB
    //STEP 1 : FETCH OUR BACKEND SERVER URL
    // STEP 2 : TELL WHICH METHOD TO fetch//
    // STEP 3 :IN Header GIVE OBJECT { "Content-Type": "application/json",}
    // STEP 4 : MAKE SURE OUR DATA IN BODY IS ALWAYS JSON
    const response = await fetch("https://z8ptm9-3000.csb.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("response data : ", response);

    // LETS ONCE DATA STORED INTO DATA BASE THEN WE HAVE TO REDIRECT TO LOGIN PAGE
  };
  const Submit = () => {
    alert("Data submitted");
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFh5cy-mY_5ypQLdIr63K-nSD4bfTADQ9dg&s"
              alt="Registration Illustration"
              className="w-full max-w-sm lg:max-w-md rounded-xl"
            />
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-purple-500">
              Registration Form
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your phone number"
                  value={user.phone}
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
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={Submit}>
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
