import React, { useContext } from "react";
import ProjectCard from "./ProjectCard"; // Import your ProjectCard component here
import "./index.css";
import { ProjectsContext } from "../contexts/ProjectsProvider";

const NewProjects = () => {
  const { projects } = useContext(ProjectsContext);
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="bg-gray-800 p-10 border border-gray-300 rounded-xl shadow-lg">

      <h2 className="text-3xl text-white text-center font-semibold uppercase mb-6">
        All Projects
      </h2>
      <div className="container mx-auto grid grid-cols-3 gap-7">

        {
          sortedProjects.reverse().map((project, index) => (

            <ProjectCard key={index} project={project} />

          ))
        }

      </div>

      {/* <div class="overflow-x-scroll horizontal-scroll mb-10 whitespace-nowrap">
        <div class="flex space-x-4 mb-10">
          
          <div class="flex-shrink-0">
            <div class="bg-white min-h-[400px] min-w-[350px] rounded-xl overflow-hidden shadow-l">
              <img
                src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.2082370165.1716076800&amp;semt=ais_user"
                alt="Project 2"
                class="w-full h-48 object-cover object-center"
              ></img>
              <div class="p-4 flex flex-col h-full">
                <div class="mb-4">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
                    Project 2
                  </h2>
                  <p class="text-gray-600 h-[60px] overflow-hidden  line-clamp-3">
                    This is a description for Project 2.
                  </p>
                </div>
                <div class="flex justify-between gap-4 items-center">
                  <p class="text-green-800  font-semibold">Collected: PKR300</p>
                  <p class="text-red-700 font-semibold">Required: PKR 800</p>
                </div>
                <a
                  class="block w-full bg-black mt-4 text-white rounded-md text-center py-2 hover:bg-blue-600 transition duration-300"
                  href="/project/2"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div class="flex-shrink-0">
            <div class="bg-white min-h-[400px] min-w-[350px] rounded-xl overflow-hidden shadow-l">
              <img
                src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.2082370165.1716076800&amp;semt=ais_user"
                alt="Project 1"
                class="w-full h-48 object-cover object-center"
              ></img>
              <div class="p-4 flex flex-col h-full">
                <div class="mb-4">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
                    Project 1
                  </h2>
                  <p class="text-gray-600 h-[60px] overflow-hidden  line-clamp-3">
                    This is a description for Project 1.
                  </p>
                </div>
                <div class="flex justify-between gap-4 items-center">
                  <p class="text-green-800  font-semibold">Collected: PKR500</p>
                  <p class="text-red-700 font-semibold">Required: PKR 1000</p>
                </div>
                <a
                  class="block w-full bg-black mt-4 text-white rounded-md text-center py-2 hover:bg-blue-600 transition duration-300"
                  href="/project/1"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-x-4 mb-10">
          <div class="flex-shrink-0">
            <div class="bg-white min-h-[400px] min-w-[350px] rounded-xl overflow-hidden shadow-l">
              <img
                src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.2082370165.1716076800&amp;semt=ais_user"
                alt="Project 2"
                class="w-full h-48 object-cover object-center"
              ></img>
              <div class="p-4 flex flex-col h-full">
                <div class="mb-4">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
                    Project 2
                  </h2>
                  <p class="text-gray-600 h-[60px] overflow-hidden  line-clamp-3">
                    This is a description for Project 2.
                  </p>
                </div>
                <div class="flex justify-between gap-4 items-center">
                  <p class="text-green-800  font-semibold">Collected: PKR300</p>
                  <p class="text-red-700 font-semibold">Required: PKR 800</p>
                </div>
                <a
                  class="block w-full bg-black mt-4 text-white rounded-md text-center py-2 hover:bg-blue-600 transition duration-300"
                  href="/project/2"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div class="flex-shrink-0">
            <div class="bg-white min-h-[400px] min-w-[350px] rounded-xl overflow-hidden shadow-l">
              <img
                src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.2082370165.1716076800&amp;semt=ais_user"
                alt="Project 1"
                class="w-full h-48 object-cover object-center"
              ></img>
              <div class="p-4 flex flex-col h-full">
                <div class="mb-4">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">
                    Project 1
                  </h2>
                  <p class="text-gray-600 h-[60px] overflow-hidden  line-clamp-3">
                    This is a description for Project 1.
                  </p>
                </div>
                <div class="flex justify-between gap-4 items-center">
                  <p class="text-green-800  font-semibold">Collected: PKR500</p>
                  <p class="text-red-700 font-semibold">Required: PKR 1000</p>
                </div>
                <a
                  class="block w-full bg-black mt-4 text-white rounded-md text-center py-2 hover:bg-blue-600 transition duration-300"
                  href="/project/1"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

        </div>
      </div> */}

    </div>
  );
};

export default NewProjects;
