import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../contexts/ProjectsProvider";
import LoggeInRequired from "../components/logginRequired";

import admins from '../data/admins';
import { Link } from "react-router-dom";
import axios from "axios";


export default function AdminDashBoard() {
    const { projects, user } = useContext(ProjectsContext);

    if (!user || !admins.includes(user.email)) {
        return (
            <LoggeInRequired />
        )
    }

    const backedProjects = projects.filter((project) => project.backers.length > 0);
    // console.log(backedProjects);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <h2 className="text-xl font-semibold mb-4">Projects with Backers</h2>
            {
                backedProjects.length <= 0 ?
                    (
                        <div className="container mx-auto text-2xl">No Backed Projects yet</div>
                    ) : (
                        <div className="container mx-auto space-y-7">
                            {
                                backedProjects.map((project, index) => (
                                    <LocalProjectCard key={index} project={project} />
                                ))
                            }
                        </div>
                    )
            }
        </div>
    )
}

function LocalProjectCard({ project, user }) {

    const collectedPercentage = (project.collectedAmount / project.neededAmount) * 100;

    const [backersDetails, setBackersDetails] = useState([]);

    //for debugging.
    // useEffect(() => {
    //     console.log("backer details: ", backersDetails);
    //     console.log("beckersDetails Keys: ", Object.keys(backersDetails));
    //     console.log("loading status: ", loadingStatus);
    // }, [backersDetails, loadingStatus]);

    useEffect(() => {
        // console.log(project.title);
        const fetchAndSetBackersDetails = async (userID, index) => {

            try {
                const response = await axios.get(`http://localhost:5200/api/user/${userID}`);
                const details = await response.data;
                // console.log(details);
                // console.log(details.name, details.email, details.phone);
                setBackersDetails((prevDetails) => {
                    const updatedDetails = [...prevDetails];
                    updatedDetails[index] = {
                        name: details.name,
                        email: details.email,
                        phone: details.phone,
                    };
                    return updatedDetails;
                });

            } catch (error) {
                setBackersDetails((prevDetails) => {
                    const updatedDetails = [...prevDetails];
                    updatedDetails[index] = {
                        name: 'not available',
                        email: 'not available',
                        phone: 'not available',
                    };
                    return updatedDetails;
                });
                console.log(error);
            }
        }

        for (let i = 0; i < project.backers.length; i++) {
            // console.log("backer ", i, " user id: ", project.backers[i].user);
            fetchAndSetBackersDetails(project.backers[i].user, i);
        }
    }, []);

    const handleConfirmBacker = async (index) => {
        try {
            await axios.put(`http://localhost:5200/api/project/${project._id}/backer/${index}/confirm`);
            alert("status updated!")
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeclineBacker = async (index) => {
        try {
            await axios.put(`http://localhost:5200/api/project/${project._id}/backer/${index}/decline`)
            alert("status updated!")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-white w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 ">

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

            <div className="w-full p-4 flex flex-col">

                <div className="mb-4">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{project.title}</h2>
                    <h2 className="text-sm text-slate-500 font-semibold">{project._id}</h2>
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

                <div className="space-y-5 rounded">
                    <div className="bg-gray-800 text-white text-center font-bold py-3 rounded">Backers Details</div>
                    {
                        project.backers.map((backer, index) => (
                            <div key={index} className="bg-slate-100 p-2 rounded">
                                
                                <div className="font-bold text-xl text-center">Backer {index + 1}</div>
                                <div className="flex space-x-1">
                                    <div className="font-bold">User id: </div>
                                    <div>{backer.user}</div>
                                </div>
                                
                                <div className="font-bold text-center mt-3">Backer contact details</div>
                                <div className="flex space-x-1">
                                    <div className="font-bold">User Name: </div>
                                    {
                                        Object.keys(backersDetails).includes(`${index}`) ?
                                            <div>{backersDetails[index].name}</div>
                                            :
                                            <div>Loading...</div>
                                    }
                                </div>
                                <div className="flex space-x-1">
                                    <div className="font-bold">User email: </div>
                                    {
                                        Object.keys(backersDetails).includes(`${index}`) ?
                                            <div>{backersDetails[index].email}</div>
                                            :
                                            <div>Loading...</div>
                                    }
                                </div>
                                <div className="flex space-x-1">
                                    <div className="font-bold">User Phone: </div>
                                    {
                                        Object.keys(backersDetails).includes(`${index}`) ?
                                            <div>{backersDetails[index].phone}</div>
                                            :
                                            <div>Loading...</div>
                                    }
                                </div>

                                <div className="font-bold text-center mt-3">Payment details</div>
                                <div>
                                    <div className="font-bold">Receipt image</div>
                                    <img className="mx-auto" src={backer.paymentRepiptURL} alt="" />
                                </div>

                                <div className="flex space-x-1">
                                    <div className="font-bold">Amount: </div>
                                    <div>{backer.amount}</div>
                                </div>

                                <div className="flex space-x-1">
                                    <div className="font-bold">Status: </div>
                                    <div>{backer.status}</div>
                                </div>

                                <div className="flex justify-between p-5">

                                    <button onClick={() => handleDeclineBacker(index)}
                                        disabled={backer.status != 'pending'}
                                        className="bg-yellow-500 px-3 py-2 rounded disabled:bg-slate-300">
                                        Decline
                                    </button>

                                    <button onClick={() => handleConfirmBacker(index)} className="bg-green-500 px-3 py-2 rounded disabled:bg-slate-300"
                                        disabled={backer.status != 'pending'}
                                    >
                                        Confirm
                                    </button>
                                </div>

                            </div>
                        ))
                    }
                </div>


            </div>

        </div>
    )
}