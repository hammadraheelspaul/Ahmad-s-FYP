import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { ProjectsContext } from "../contexts/ProjectsProvider";

import { FaUserCircle } from "react-icons/fa";
import ProfileMenu from "./profileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, setUser, projects } = useContext(ProjectsContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-900 p-2 z-20  sticky top-0  shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="font-mono font-extrabold text-[16px] hidden md:flex space-x-4 text-white">
          {/* Navigation links */}
          <Link to="/" className="hover:text-teal-500 uppercase">
            Home
          </Link>
          <Link to="/" className="hover:text-teal-500 uppercase">
            Projects
          </Link>
          {/* <Link to="/add-projects" className="hover:text-teal-500 uppercase">
            Add Projects
          </Link> */}
          <Link to="/Campaign" className="hover:text-teal-500 uppercase">
            Campaign
          </Link>
          <Link to="/AboutUs" className="hover:text-teal-500 uppercase">
            About Us
          </Link>
          <Link to="/Search" className="hover:text-teal-500 uppercase">
            Explore
          </Link>
        </div>
        <a className="font-bold text-white" href="/">
          <div className="flex items-start">
            <h3 className="hidden md:flex font-mono font-extrabold text-[40px] text-teal-500 mr-10">
              LEEP
            </h3>
          </div>
        </a>
        <div className="flex items-center text-white">
          {/* Search input */}
          <input
            className="outline-none px-2 py-1 rounded-l-lg bg-gray-100 text-gray-800"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            onClick={() => { }}
            className="px-4 py-2 bg-teal-500 text-white rounded-r-lg"
          >
            <BsSearch />
          </button>
          {/* User authentication */}
          <div className="">
            {
              user ? (
                <div className="relative ml-3">
                  <FaUserCircle onClick={() => { setShowProfileMenu(!showProfileMenu) }} className="text-4xl text-teal-500" />
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="font-mono font-extrabold text-[16px] bg-teal-500 rounded hover:scale-105 uppercase ml-3 px-3 py-2"
                >
                  Log in
                </Link>
              )
            }
            {
              showProfileMenu && user &&
              <ProfileMenu user={user} setUser={setUser} setShowProfileMenu={setShowProfileMenu} />
            }
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      <div className="md:hidden flex justify-between p-4 mx-4">
        <div className="flex items-center">
          {/* Logo */}
          <h3 className="ml-2 text-white font-bold">LEEP</h3>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "flex flex-col items-center" : "hidden"
          }`}
      >
        {/* Mobile navigation links */}
        <Link
          to="/"
          className="block px-4 py-2 text-lg font-medium hover:bg-gray-800 text-white"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="block px-4 py-2 text-lg font-medium hover:bg-gray-800 text-white"
        >
          Projects
        </Link>
        {/* <Link
          to="/add-projects"
          className="block px-4 py-2 text-lg font-medium hover:bg-gray-800 text-white"
        >
          Add Projects
        </Link> */}
        <Link
          to="/campaign"
          className="block px-4 py-2 text-lg font-medium hover:bg-gray-800 text-white"
        >
          Campaign
        </Link>
        <Link
          to="/aboutus"
          className="block px-4 py-2 text-lg font-medium hover:bg-gray-800 text-white"
        >
          About Us
        </Link>
        <Link
          to="/search"
          className="block px-4 py-2 text-lg font-medium hover:bg-gray-800 text-white"
        >
          Explore
        </Link>
        {/* Add more mobile navigation links here */}
      </div>
    </div>
  );
};

export default Header;
