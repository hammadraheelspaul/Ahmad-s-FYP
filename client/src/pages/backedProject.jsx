import { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsProvider";


import LoggeInRequired from "../components/logginRequired";


export default function BackedProjects() {

    const { user } = useContext(ProjectsContext);

    if (!user) {
        return (
            <LoggeInRequired />
        )
    }

    const { projects } = useContext(ProjectsContext);
    const backedProjects = projects.filter((project) =>
        project.backers.some((backer) => backer.user === user._id)
    );
    return (
        <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">Backed Projects</h1>
        {backedProjects.length === 0 ? (
          <p className="text-gray-600">You have not backed any projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backedProjects.map((project) => (
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