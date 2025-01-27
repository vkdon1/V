import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; 2024 VD LearnNest. All rights reserved.
        </p>
        <div className="footer-links space-x-4">
          <Link
            to="/About"
            className="text-purple-500 hover:text-purple-400 text-sm">
            About Us
          </Link>
          <Link
            to="/Contact"
            className="text-purple-500 hover:text-purple-400 text-sm">
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="text-purple-500 hover:text-purple-400 text-sm">
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-purple-500 hover:text-purple-400 text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
