import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import StoryPage from "./Pages/StorePage";
import WorkPage from "./Pages/WorkPage";
import StorePage from "./Pages/StorePage";
import CareBrandPage from "./Pages/CareBrandPage";
import BlogPage from "./Pages/BlogPage";
import BrandingPage from "./Pages/BrandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/story", element: <StoryPage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/store", element: <StorePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/brand", element: <BrandingPage /> },
      { path: "/calcare-brand", element: <CareBrandPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
