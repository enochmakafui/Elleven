import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
// import AnimateCursor from "../components/AnimateCursor";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="container">
      <ScrollToTop />
      <MainNavigation />
      <Outlet />
      {/* <AnimateCursor /> */}
      <Footer />
    </div>
  );
};

export default RootLayout;
