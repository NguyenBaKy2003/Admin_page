// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Main/Main.jsx";
// import HeaderEmployes from "./pages/Employers/HeaderEmployes.jsx";

function LayOut() {
  const location = useLocation();

  return (
    <div className="">
      <main>
        <Outlet></Outlet>
        {location.pathname === "/" && <Home></Home>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default LayOut;
