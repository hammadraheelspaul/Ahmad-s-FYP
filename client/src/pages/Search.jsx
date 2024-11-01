import { View, Text } from "react";
import React, { useEffect, useState, useContext } from "react";
import { Navbar, ProjectCard } from "../components";
import { TypeAnimation } from "react-type-animation";
import { logo } from "../assets/";
import { future } from "../assets/";

// import "animate.css/animate.min.css";
import Footer from "../components/Footer";

import { ProjectsContext } from "../contexts/ProjectsProvider";

/*
 const { projects } = useContext(ProjectsContext);
console.log(projects)
*/

const Search = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#4c5282";

    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const { projects } = useContext(ProjectsContext);
  const [searchTerm, setSearchTerm] = useState("game");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [projects]);

  const handleSearch = () => {
    try {
      // Ensure searchTerm is always a string
      const term = searchTerm ? searchTerm.toLowerCase() : "";

      // Check if projects array is defined
      if (projects && projects.length > 0) {
        // Filter projects based on the search term
        const filteredProjects = projects.filter((project) => {
          const projectName = project.name ? project.name.toLowerCase() : "";
          const projectDescription = project.projectDetails?.description
            ? project.projectDetails.description.toLowerCase()
            : "";
          const projectTags = project.tags
            ? project.tags.map((tag) => tag.toLowerCase())
            : [];

          return (
            projectName.includes(term) ||
            projectDescription.includes(term) ||
            projectTags.some((tag) => tag.includes(term))
          );
        });

        // Update search results state
        setSearchResults(filteredProjects);
      } else {
        // If projects array is not defined or empty, clear search results
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${future})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="text-center mt-[5%] mb-[10%]  bg-gray-200 bg-opacity-20 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Ready to LEEP into Future?
          </h2>
          <p className="text-white text-lg md:text-xl">
            Explore the world of endless possibilities here
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-3xl font-bold text-white">
          Discover Exciting Projects
        </h3>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          placeholder="Search by any keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 mr-3 rounded border border-gray-300 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="p-3 rounded bg-gray-700 text-white text-lg cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Display search results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5 mt-6 mr-5 lg:ml-10 gap-8">
        {searchResults.map((project, index) => (
          <div>
            {" "}
            <ProjectCard project={project} key={project._id} />
            {/* {project.url} */}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
