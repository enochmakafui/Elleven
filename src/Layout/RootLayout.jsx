import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import AnimateCursor from "../components/AnimateCursor";

const RootLayout = () => {
  return (
    <div className="container">
      <MainNavigation />
      <Outlet />
      <AnimateCursor />
    </div>
  );
};

export default RootLayout;
