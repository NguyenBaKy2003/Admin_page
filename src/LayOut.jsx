import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/SliderBar/Sliderbar"; // Import Sidebar

function LayOut() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-1">
        <Sidebar /> {/* Sidebar */}
        <div className="flex-1 flex flex-col">
          <Header /> {/* Header */}
          <main className="flex-1 p-6">
            {location.pathname === "/" ? <Home /> : <Outlet />}{" "}
            {/* Main Content */}
          </main>
        </div>
      </div>
      <Footer /> {/* Full-Width Footer */}
    </div>
  );
}

export default LayOut;
