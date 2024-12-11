import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
    });

    Aos.refresh();

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-288px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
