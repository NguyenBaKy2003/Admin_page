import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./LayOut";
import "./index.css";
import JobList from "./components/Joblist/Joblist";
import CreateJob from "./components/CreateJob/CreateJob";
import RecruiterProfile from "./components/Profile/Profile";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/jobs" element={<JobList></JobList>}></Route>
          <Route path="/createjob" element={<CreateJob></CreateJob>}></Route>
          <Route
            path="/profile"
            element={<RecruiterProfile></RecruiterProfile>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
