import { useState, useContext, useEffect } from "react";
import { Navbar } from "../components";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer";

import Content from "../components/Content";
import Team from "../components/Team";
import Perks from "../components/Perks";
import Basics from "../components/Basics";
import axios from 'axios'

import { logo } from '../assets'
import vrPerson from '../assets/vr.png'

import { ProjectsContext } from "../contexts/ProjectsProvider";
import LoggeInRequired from "../components/logginRequired";


const Campaign = () => {
  
  const { compaignProject, setCompaignProject, user } = useContext(ProjectsContext);

  // useEffect(() => {
  //   console.log(user );
  // }, [user ]);
  
  const [activeTab, setActiveTab] = useState("Basics");
  const [fillStatus, setFillStatus] = useState([]);

  // useEffect(() => {
  //   console.log(activeTab, fillStatus);
  // }, [activeTab, fillStatus]);
  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSubmit = () => {
    
    if(fillStatus.includes(0) && fillStatus.includes(1) && fillStatus.includes(2))
    {

      axios.post('http://localhost:5200/api/projects', {compaignProject, createdBy: user._id})
      .then(response => {
        // console.log(response.data);
        // setCompaignProject({});
        alert("Project Added Successfully!");
        
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  const handleSave = () => {
    axios.put(`http://localhost:5200/api/projects/${compaignProject.id}`, compaignProject)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const stats = [
    { name: "Easy Setup" },
    { name: "Engage Your Audience" },
    { name: "Flexible Funding Options" },
    { name: "Transparent Tracking" },
    { name: "Expert support" },
  ];

  // protecting the page :)
  // please do not curse me for this. The budget and the time was kinda low.
  if(!user){
    return(
      <LoggeInRequired />
    )
  }

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Create your campaign with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to Leep, where dreams become reality! Whether you're an
              aspiring entrepreneur, a passionate artist, or a community
              activist with a cause close to your heart, our platform empowers
              you to bring your ideas to life through the support of a global
              community.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-1 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="flex">

        <div className="w-1/2">
          <div className="flex justify-center space-x-3 my-3">
            <button
              className={` rounded-full ${activeTab === "Basics"
                ? "bg-teal-500 z-10 text-white"
                : "border border-gray-100 text-black"
                }  px-10 py-3 text-lg `}
              onClick={() => handleTabClick("Basics")}
            >
              Basics
            </button>
            <button
              className={`rounded-full ${activeTab === "Perks"
                ? "bg-teal-500 z-10 text-white"
                : "border border-gray-100 text-black"
                }  px-10 py-3 text-lg `}
              onClick={() => handleTabClick("Perks")}
            >
              Perks
            </button>
            <button
              className={` rounded-full ${activeTab === "Content"
                ? "bg-teal-500 z-10 text-white"
                : "border border-gray-100 text-black"
                }  px-10 py-3 text-lg `}
              onClick={() => handleTabClick("Content")}
            >
              Content
            </button>
            {/* <button
              className={` rounded-full ${activeTab === "Team"
                ? "bg-teal-500 z-10 text-white"
                : "border border-gray-100 text-black"
                }  px-10 py-3 text-lg `}
              onClick={() => handleTabClick("Team")}
            >
              Team
            </button> */}
          </div>

          {activeTab === "Basics" && <Basics setActiveTab = {setActiveTab} fillStatus={fillStatus} setFillStatus = {setFillStatus}/>}
          {activeTab === "Perks" && <Perks setActiveTab = {setActiveTab} fillStatus={fillStatus} setFillStatus = {setFillStatus}/>}
          {activeTab === "Content" && <Content setActiveTab = {setActiveTab} fillStatus={fillStatus} setFillStatus = {setFillStatus}/>}
          {/* {activeTab === "Team" && <Team setActiveTab = {setActiveTab} setFillStatus = {setFillStatus}/>} */}

          <div className="flex justify-center">
            <button
              className={` text-white font-bold py-2 px-4 rounded m-2 ${fillStatus.includes(0) && fillStatus.includes(1) && fillStatus.includes(2) ? 'bg-blue-500 hover:bg-blue-700': 'bg-slate-500'}`}
              onClick={handleSubmit}
            >
              Submit
            </button>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
              onClick={handleSave}
            >
              Save
            </button> */}
          </div>
          
        </div>

        {/* for image */}
        <div className='w-1/2 h-[80vh] bg-teal-500'>
          <img src={logo} alt='leep' className='ml-auto' />
          <img src={vrPerson} alt='jeje' className="mx-auto h-1/2" />
          <h1 className='text-center text-4xl font-bold uppercase text-white -translate-y-5'>Take a LEEP, Build your dreams</h1>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Campaign;
