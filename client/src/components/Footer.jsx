import React, { useState } from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Add logic to handle subscription (e.g., send email to server)
    console.log(`Subscribed with email: ${email}`);

    // Close the modal after subscription
    setShowModal(false);
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="LEEP" className="w-12 sm:w-16" />
            <span className="ml-3 text-xl">LEEP</span>
          </a>
          <p className="mt-2 text-sm text-gray-400">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Explore
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  What we do
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Funding
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  About us
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Help & Support
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors duration-300">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300"
              onClick={() => setShowModal(true)}
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 LEEP —
            <a
              href=""
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank"
            >
              @COMSATS
            </a>
          </p>
          <span className="inline-flex sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href=""
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href=""
              className="ml-3 text-gray-400 hover:text-white transition duration-300"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href=""
              className="ml-3 text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href=""
              className="ml-3 text-gray-400 hover:text-white transition duration-300"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>

      {/* Newsletter Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
          <div className="relative w-auto max-w-sm mx-auto">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-gray-200">
                <h3 className="text-gray-800 text-lg font-semibold">
                  Subscribe to Newsletter
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-gray-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  placeholder="Your email"
                />
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-gray-200">
                <button
                  className="bg-indigo-600 text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-indigo-500 outline-none focus:outline-none mr-1 mb-1 transition duration-150 ease-in-out"
                  type="button"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
