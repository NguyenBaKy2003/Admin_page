import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicantsTable from "./components/Applicants/Applicants";
import EmployerTable from "./components/Companies/Companies";

import JobList from "./components/Joblist/Joblist";
import Main from "./components/Main/Main";
import RecruiterProfile from "./components/Profile/Profile";
import UserProfile from "./components/Userprofile/UserProfile";
import "./index.css";
import Layout from "./LayOut";
import AllJobs from "./components/AllJobs/AllJobs";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Layout></Layout>}>
          <Route path="/jobs" element={<JobList></JobList>}></Route>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route
            path="/profile"
            element={<RecruiterProfile></RecruiterProfile>}></Route>

          <Route
            path="/applicants"
            element={<ApplicantsTable></ApplicantsTable>}></Route>

          <Route
            path="/userprofile"
            element={<UserProfile></UserProfile>}></Route>

          <Route
            path="/companies"
            element={<EmployerTable></EmployerTable>}></Route>

          <Route path="/alljobs" element={<AllJobs></AllJobs>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
