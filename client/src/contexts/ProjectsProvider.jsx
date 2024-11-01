import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { projectsData } from "../data/Projects.js";
export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
 const [token, setToken] = useState(() => {
  // Try to get the token from local storage
  const storedToken = localStorage.getItem('token');
  return storedToken ? storedToken : '';
});

useEffect(() => {
  // Store the token in local storage whenever it changes
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
}, [token]);
  const [user, setUser] = useState(() => {
    // Try to get the user from local storage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // Store the user in local storage whenever it changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const [compaignProject, setCompaignProject] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5200/api/projects");
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
    // setProjects(projectsData);
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        user,
        setUser,
        compaignProject,
        setCompaignProject,
        token,
        setToken
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
