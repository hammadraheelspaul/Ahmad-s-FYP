import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  RecommendedProjects,
  NewProjects,
  ProjectDetailPage,
} from "./components";

import {
  HomePage,
  SignInPage,
  SignUpPage,
  ForgetPassPage,
  AboutUs,
  Search,
  Campaign,
  MyProjects,
  BackedProjects
  
} from "./pages";

import CheckoutPage from "./pages/CheckoutPage";
import { ProjectsProvider } from "../src/contexts/ProjectsProvider";
import CreateProjectPage from "./pages/CreateProjectPage";

export default function App() {
  return (
    <ProjectsProvider>
      <div className="font-poppins">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                </>
              }
            />

            <Route
              path="/project/:projectId"
              element={
                <>
                  <Navbar />
                  <ProjectDetailPage />
                </>
              }
            />

            <Route
              path="/AboutUs"
              element={
                <>
                  <Navbar />
                  <AboutUs />
                </>
              }
            />

            <Route
              path="/Campaign"
              element={
                <>
                  <Navbar />
                  <Campaign />
                </>
              }
            />
             <Route
              path="/checkout"
              element={
                <>
                  
                  <CheckoutPage />
                </>
              }
            />

           
            <Route
              path="/add-projects"
              element={
                <>
                  <CreateProjectPage />
                </>
              }
            />

           <Route
              path="/Search"
              element={
                <>
                  <Navbar />
                  <Search />
                </>
              }
            />

            <Route
              path="/signup"
              element={
                <>
                  <SignUpPage />
                </>
              }
            />
            <Route
              path="/signin"
              element={
                <>
                  <SignInPage />
                </>
              }
            />
            <Route
              path="/forgetpass"
              element={
                <>
                  <ForgetPassPage />
                </>
              }
            />

            <Route 
              path="/myProjects"
              element ={
                <>
                  <MyProjects />
                </>
              }
            
            />
            <Route 
              path="/backedProjects"
              element ={
                <>
                  <BackedProjects />
                </>
              }
            
            />
          </Routes>
        </Router>
      </div>
    </ProjectsProvider>
  );
}
