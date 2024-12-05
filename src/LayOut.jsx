import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/SliderBar/Sliderbar"; // Import Sidebar

function LayOut() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar visible on medium (md) screens and larger */}
        <div className="md:block ">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6">
            {location.pathname === "/employes" ? <Main /> : <Outlet />}{" "}
            {/* Main Content */}
          </main>
        </div>
      </div>
      <Footer /> {/* Full-Width Footer */}
    </div>
  );
}

export default LayOut;
