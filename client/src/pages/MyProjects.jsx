import { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsProvider";


import LoggeInRequired from "../components/logginRequired";

const MyProjects = () => {

    const {user  } = useContext(ProjectsContext);

    if(!user){
        return(
          <LoggeInRequired />
        )
    }
    const {projects } = useContext(ProjectsContext);
    const myProjects = projects.filter((project) => project.createdBy === user._id);
    
    return(
        <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      {myProjects.length === 0 ? (
        <p className="text-gray-600">You have not created any projects yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-lg rounded-lg p-5 border"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.tagline}</p>
              <div className="mt-3">
                <a
                  href={`/project/${project._id}`}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default MyProjects;