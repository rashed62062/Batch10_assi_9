import { Outlet } from "react-router-dom";
import Navar from "../Component/Navar/Navar";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navar />

      {/* Main content */}
      <div className="min-h-[calc(100vh-225px)]">
        {/* Ensures content fills space between navbar and footer */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
