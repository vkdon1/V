import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData); // Log contact data to console
    // Add any further logic to handle the form submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-500">VD LearnNest</h1>
        </header>

        {/* Introduction Section */}
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-purple-500">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-lg text-white">
            We're here to assist you with any queries you may have. Whether you
            need help with your learning journey or have feedback for us, feel
            free to reach out. Our team will get back to you as soon as
            possible.
          </p>
          <p className="mt-4 text-lg text-white">
            Please use the contact form below to send us a message, and we'll
            respond promptly. We value your input and are always ready to help!
          </p>
        </section>

        {/* Contact Form and Left Image Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section (Image) */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZqLHJ7bTK02LER_2YxHwLlXOx_TWv2D-lQ&s"
              alt="Contact Us Illustration"
              className="w-full max-w-sm lg:max-w-md rounded-xl"
            />
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-purple-500 text-center">
              Contact Us
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
                  value={contactData.username}
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
                  value={contactData.email}
                  onChange={handleInput}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your message"
                  value={contactData.message}
                  onChange={handleInput}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-purple-500">
            Connect with us
          </h3>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/vallabh-dongre-286491262"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500">
              LinkedIn
            </a>
            <a
              href="https://github.com/vkdon1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500">
              GitHub
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-purple-500">
            Operating Hours
          </h3>
          <ul className="mt-4 text-white">
            <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 10:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Location */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-purple-500">
            Our Location
          </h3>
          <p className="mt-4 text-white">
            Visit us at: 123 Main St, City, Country
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500">
            View on Map
          </a>
        </div>

        {/* FAQ Section */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-purple-500">
            Frequently Asked Questions
          </h3>
          <div className="mt-4 text-white">
            <div className="mb-4">
              <strong>Q: How can I get support for a product?</strong>
              <p>
                A: You can reach our support team by email or through the
                contact form above.
              </p>
            </div>
            <div className="mb-4">
              <strong>Q: What are your operating hours?</strong>
              <p>A: We are available from Monday to Friday, 9 AM - 5 PM.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
