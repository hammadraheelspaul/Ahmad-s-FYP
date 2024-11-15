import React, { useState } from "react";
import axios from "axios";

const CreateProject = () => {
  const [message, setMessage] = useState("");

  const [project, setProject] = useState({
    name: "",
    projectDetails: {
      media: "",
      description: "",
    },
    imageUrl: "",
    neededAmount: 0,
    endDate: "",
    category: "",
    subcategory: "",
    tags: "",
    isRecommended: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (["media", "description"].includes(e.target.name)) {
      setProject((prevState) => ({
        ...prevState,
        projectDetails: {
          ...prevState.projectDetails,
          [e.target.name]: value,
        },
      }));
    } else {
      setProject({ ...project, [e.target.name]: value });
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const finalProject = {
        ...project,
        projectDetails: {
            ...project.projectDetails,
            media: project.projectDetails.media.split(','),
        },
        tags: project.tags.split(','),
        isRecommended: project.isRecommended,
        imageUrl : project.imageUrl
    };
    try {
        const response = await axios.post('http://localhost:5200/api/projects', finalProject);
        setProject({
            name: '',
            projectDetails: {
                media: '',
                description: ''
            },
            neededAmount: 0,
            endDate: '',
            category: '',
            subcategory: '',
            tags: '',
            imageUrl: '',
            isRecommended: false,
        });
        setMessage('✔️ Project added successfully!');
        setTimeout(() => setMessage(''), 5000); // Clear message after 5 seconds
    } catch (error) {
        console.error(error);
    }
}

  return (
    <div className="flex items-center justify-center bg-purple-200 min-h-screen">
      <div className="w-full ">
     
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pic url:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="imageUrl"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Media (comma-separated URLs):
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="media"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Needed Amount:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="neededAmount"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              End Date:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="endDate"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="category"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subcategory:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="subcategory"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tags (comma-separated):
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="tags"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Recommended:
              <input
                className="ml-2"
                type="checkbox"
                name="isRecommended"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Create Project"
            />
          </div>
        </form>
        {message && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProject;
