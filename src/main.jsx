import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateJob from "./components/CreateJob/CreateJob";
import JobList from "./components/Joblist/Joblist";
import RecruiterProfile from "./components/Profile/Profile";
import "./index.css";
import Layout from "./LayOut";
import PackagePayment from "./Page/Payment/PackagePayment";
import PaymentPage from "./Page/Payment/Payment";
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

          <Route
            path="/payment"
            element={<PackagePayment></PackagePayment>}></Route>
          <Route
            path="/employes/payment/:id"
            element={<PaymentPage></PaymentPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
