import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import AnimateCursor from "../components/AnimateCursor";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="container">
      <MainNavigation />
      <Outlet />
      <AnimateCursor />
      <Footer />
    </div>
  );
};

export default RootLayout;
