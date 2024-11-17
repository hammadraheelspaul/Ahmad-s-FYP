import { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsProvider";


import LoggeInRequired from "../components/logginRequired";
import { Link } from "react-router-dom";


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
      {
        backedProjects.length === 0 ? (
          <p className="text-gray-600">You have not backed any projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backedProjects.map((project) => (
              <div
                key={project._id}
                className="bg-white shadow-lg rounded-lg p-5 border"
              >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700">Project ID: {project._id}</p>

                {
                  project.backers
                    .filter((backer) => backer.user === user._id)
                    .map((backer) => (
                      <div key={backer._id} className="my-4">
                        <div>
                          <div className="font-bold">Image of receipt</div>
                          <img
                            src={backer.paymentRepiptURL}
                            alt="Payment Receipt"
                            className="h-80 aspect-square object-contain rounded-lg border mb-3"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <div className="font-bold">Amount:</div>
                          <div className="">{backer.amount}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="font-bold">Status:</div>
                          <div className="">{backer.status}</div>
                        </div>
                      </div>
                    ))
                }

                <div className="mt-3">
                  <Link
                    to={`/project/${project._id}`}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))
            }
          </div>
        )}
    </div>
  )
}