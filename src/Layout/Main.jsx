import { Outlet } from "react-router-dom";
import Navbar from "../components/pages/Shared/Navbar/Navbar";
import Footer from "../components/pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
