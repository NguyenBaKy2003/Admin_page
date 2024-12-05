// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/SliderBar/Sliderbar"; // Import Sidebar

function LayOut() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {location.pathname === "/" ? <Home /> : <Outlet />}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default LayOut;
