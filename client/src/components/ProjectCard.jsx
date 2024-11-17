import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {
    
  const collectedPercentage = (project.collectedAmount / project.neededAmount) * 100;

  return (
    <div className="bg-white w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">

      <div className="relative h-[250px] w-full">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="mx-auto w-full h-full object-cover object-center transition-opacity duration-300"

        />
        <Link
          to={`/project/${project._id}`}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          View Details
        </Link>
      </div>

      <div className="w-full h-[200px] p-4 flex flex-col">

        <div className="mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{project.title}</h2>
          {/* <p className="text-gray-600 h-[60px] overflow-hidden line-clamp-3">
            {project.projectDetails.description}
          </p> */}
        </div>

        <div className="flex justify-between gap-4 items-center mb-4">
          <p className="text-green-800 font-semibold">
            Collected: PKR {project.collectedAmount}
          </p>
          <p className="text-red-700 font-semibold">
            Required: PKR {project.neededAmount}
          </p>
        </div>

        <div className="relative h-4 w-full bg-gray-200 rounded-full mb-4">
          <div
            className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
            style={{ width: `${collectedPercentage}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
