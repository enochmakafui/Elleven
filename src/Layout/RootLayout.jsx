import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="container">
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
