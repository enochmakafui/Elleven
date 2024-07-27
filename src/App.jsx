import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import StoryPage from "./Pages/StorePage";
import WorkPage from "./Pages/WorkPage";
import StorePage from "./Pages/StorePage";
import StartProjectPage from "./Pages/StartProjectPage";
import BlogPage from "./Pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "story", element: <StoryPage /> },
      { path: "work", element: <WorkPage /> },
      { path: "store", element: <StorePage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "start-project", element: <StartProjectPage /> },
    ],
  },
]);
function App() {
  return  <RouterProvider router={router} />;
}

export default App;
