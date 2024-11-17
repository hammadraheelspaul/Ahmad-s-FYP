import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CiMail, CiPhone } from "react-icons/ci";

import Footer from "./Footer";
import MaleUser from "../assets/MaleUser.png";
import {
  Navbar,
  Hero,
  RecommendedProjects,
  ProjectCard,
  NewProjects,
} from "../components";
import FAQ from "./faqComponent";

import { ProjectsContext } from "../contexts/ProjectsProvider";
import BackProjectForm from "./backProjectForm";




const ProjectDetailPage = () => {
  const { projects, user } = useContext(ProjectsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Amount submitted:", amount);
    closeModal();
  };

  const { projectId } = useParams();
  const project = projects.find(
    (p) => p._id.toString() === projectId.toString()
  );


  if (!project) {
    return <div>Project not found {projectId}</div>;
  }

  const [ownerDetails, setOwnerDetails] = useState({});
  useEffect(() => {
    // console.log(project);
    const fetchOwnerDetails = async () => {
      if (project?.createdBy) {
        const res = await axios.get(`http://localhost:5200/api/user/${project.createdBy}`);
        // console.log(res.data);
        setOwnerDetails(res.data);
      }
    }
    fetchOwnerDetails();

  }, [project])

  const ProgressBar = ({ neededAmount, collectedAmount }) => {
    const progressPercentage = Math.min(
      (collectedAmount / neededAmount) * 100,
      100
    );

    // console.log(project?.projectDetails?.perks,  project?.projectDetails?.FAQs);

    return (
      <div className="w-full border-2 rounded-full bg-gray-200 overflow-hidden mt-4">
        <div
          className="bg-green-800 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-2"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="container mx-auto flex flex-col lg:flex-row">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                Project ID: {project._id}
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-bold mb-1">
                {project.title}
              </h1>
              <span className="flex space-x-4 text-md ">
                <h2 className="text-gray-900 text-xl title-font mb-1">
                  Category:
                </h2>
                <h2 className="text-black font-bold mt-1">
                  {project.category}
                </h2>
              </span>

              <h2 className="text-gray-900 text-4xl title-font mb-1">
                {project.tagline}
              </h2>
              <div className="flex mb-4 space-x-4">
                <p>{project.projectDetails.description}</p>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  {/* Additional items */}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div>
                  <span className="flex justify-between title-font font-medium text-2xl text-gray-900">
                    <span>Collected: Rs {project.collectedAmount}</span>
                    <span className="text-sm text-gray-500">
                      {project.backers.length} Backers
                    </span>
                  </span>
                  <span className="title-font font-medium text-lg text-gray-900">
                    <ProgressBar
                      neededAmount={project.neededAmount}
                      collectedAmount={project.collectedAmount}
                    />
                    <span className="flex justify-between mt-2">
                      ${project.collectedAmount} of Rs {project.neededAmount}{" "}
                      raised
                      <span className="text-sm text-gray-500">Days Left</span>
                    </span>
                  </span>
                  <span className="text-sm text-gray-500">
                    <br />
                    <h1 className="text-gray-900 text-2xl title-font mb-1">
                      Project Timeline:
                    </h1>
                    <h3>Duration : {project.duration}</h3>
                    <h4>Start Date: {project.startDate}</h4>
                    <h4>End Date: {project.endDate}</h4>
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                {
                  user ? (

                    <button
                      onClick={openModal}
                      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Back this project
                    </button>

                  ) : (
                    <button
                      onClick={openModal}
                      className="text-white bg-slate-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Login to back this project
                    </button>
                  )
                }
                
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-2 border-gray-300 inline-flex items-center justify-center text-gray-500 hover:bg-gray-300 hover:border-gray-400 transition duration-300">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        isModalOpen && user && (
          <BackProjectForm closeModal={closeModal} projectId={projectId} userId={user._id} />
        )
      }
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-4xl font-bold title-font text-gray-800 tracking-widest uppercase">
                {project.title}
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-bold mb-4">
                {project.createdBy}
              </h1>
              <div className="flex mb-4">
                <a
                  className={`flex-grow ${activeTab === "description"
                    ? "text-indigo-500 border-b-2 border-indigo-500"
                    : "border-b-2 border-gray-300"
                    } py-2 text-lg px-1`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </a>
                <a
                  className={`flex-grow ${activeTab === "reviews"
                    ? "text-indigo-500 border-b-2 border-indigo-500"
                    : "border-b-2 border-gray-300"
                    } py-2 text-lg px-1`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </a>
                <a
                  className={`flex-grow ${activeTab === "projectUpdates"
                    ? "text-indigo-500 border-b-2 border-indigo-500"
                    : "border-b-2 border-gray-300"
                    } py-2 text-lg px-1`}
                  onClick={() => setActiveTab("projectUpdates")}
                >
                  Project Updates
                </a>
              </div>
              <div className="mb-4">
                {activeTab === "description" && (
                  <p className="leading-relaxed mb-4">
                    {project.projectDetails.description}
                  </p>
                )}
                {activeTab === "reviews" && (
                  <p className="leading-relaxed mb-4">User reviews go here.</p>
                )}
                {activeTab === "projectUpdates" && (
                  <p className="leading-relaxed mb-4">
                    Latest updates on the project.
                  </p>
                )}
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Start Date</span>
                <span className="ml-auto text-gray-900">
                  {project.startDate}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">End Date</span>
                <span className="ml-auto text-gray-900">{project.endDate}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Category</span>
                <span className="ml-auto text-gray-900">
                  {project.category}
                </span>
              </div>
            </div>
            <img
              alt="project"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={project.imageUrl}
            />
          </div>
        </div>
      </section>

      {/* ownerDetails */}
      {
        ownerDetails &&
        <div className="px-16">
          <div className="text-4xl font-bold title-font text-gray-800 tracking-widest">Owner Details</div>
          <div className="w-2/3 mt-10 mx-auto p-5 bg-white rounded-lg " >
            <div className="text-3xl font-bold text-slate-600">{ownerDetails.name}</div>
            <div className="h-px mt-2 bg-slate-200 rounded-full" />
            <div className="flex items-center space-x-4 text-xl ">
              <div><CiMail /></div>
              <div>{ownerDetails.email}</div>
            </div>
            <div className="h-px mt-2 bg-slate-200 rounded-full" />
            <div className="flex items-center space-x-4 text-xl ">
              <div><CiPhone /></div>
              <div>{ownerDetails.phone}</div>
            </div>
            <div className="h-px mt-2 bg-slate-200 rounded-full" />

          </div>
        </div>
      }

      {/* perks */}
      {
        project?.projectDetails?.perks.length > 0 &&
        <div className="px-16">
          <div className="text-4xl font-bold title-font text-gray-800 tracking-widest">Perks</div>
          <div className=" grid grid-cols-4">

            {
              project.projectDetails.perks.map((perk, index) => (
                <div key={index} className=" -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xs lg:flex-shrink-0 mb-4">
                  <div className="rounded-2xl bg-white mt-8 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                    <div className="mx-auto max-w-xs px-2">
                      <p className="text-base font-semibold text-gray-600">{perk.title}</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">${perk.amount}</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                      </p>
                      <p className="mt-2 text-gray-600">{perk.description}</p>
                      <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }

      {/* FAQs */}
      {
        project?.projectDetails?.FAQs.length > 0 &&
        <div className="px-16" >
          <div className="text-4xl font-bold title-font text-gray-800 tracking-widest">FAQs</div>
          <div className="w-2/3 mx-auto p-5 bg-white rounded-lg " >
            {
              project.projectDetails.FAQs.map((faq, index) => (
                <FAQ key={index} faq={faq} />
              ))
            }
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
