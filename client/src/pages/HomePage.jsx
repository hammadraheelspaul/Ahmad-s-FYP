import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Hero,
  RecommendedProjects,
  ProjectCard,
  NewProjects,
  ProjectDetailPage,
  Footer,
} from "../components";
import CreateProject from "../components/CreateProject";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <CreateProject /> */}
      <div className="mt-8 text-center bg-white p-8 rounded-lg shadow-md w-full">
        <div className="bg-white p-4 md:p-8 mx-auto rounded-lg shadow-md">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate__animated animate__fadeInDown">
            Ready to raise funds for your idea?
          </h2>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg md:text-xl text-gray-800 font-serif leading-relaxed px-10 md:px-20">
            Join the movement where dreams become reality! Break free from
            traditional constraints and receive support from a diverse range of
            backers who believe in your project. Experience the thrill of
            success together with your backers, creating a shared achievement
            that resonates far beyond the funding campaign.
            <br />
            Your idea deserves to thrive, and Leep is here to make it happen.
          </p>

          <div className="flex justify-center mt-4 p-3">
            <Link to="/Campaign">
              <button className="bg-green-600 text-white font-bold px-8 py-4 mx-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
                Start CrowdFunding
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <RecommendedProjects /> */}
      <NewProjects />

      <Footer />
    </>
  );
};

export default HomePage;
