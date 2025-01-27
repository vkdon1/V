import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap bg-none items-center justify-between mx-auto p-4">
          <a
            to="#"
            className="flex items-center bg-none space-x-3 rtl:space-x-reverse">
            <img
              src="data:image/png;base64,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"
              className="h-8 "
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              VD LearnNest
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About US
                </Link>
              </li>
              <li>
                <Link
                  to="/Services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Register"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/Login"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
