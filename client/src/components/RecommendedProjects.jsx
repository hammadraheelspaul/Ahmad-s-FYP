import React, { useContext } from "react";
import { ProjectCard } from './' // Import your ProjectCard component here
import './index.css'
import { ProjectsContext } from "../contexts/ProjectsProvider";

const RecommendedProjects = () => {
  const { projects } = useContext(ProjectsContext);
  console.log(projects)
  const recommendedProjects = projects.filter(project => project.isRecommended);

  return (
    <div className="bg-white p-20 border border-gray-300 rounded-xl shadow-lg">
      <h2 className="text-3xl text-black text-center font-semibold uppercase mb-6">
        Recommended Projects
      </h2>
      <div className="overflow-x-scroll  horizontal-scroll whitespace-nowrap">
        <div className="flex space-x-4">
          {[...recommendedProjects].reverse().map((project, index) => (
            <div key={index} className="flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendedProjects;