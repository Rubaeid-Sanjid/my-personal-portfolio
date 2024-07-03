import { createBrowserRouter } from "react-router-dom";
import Main from "../../Page/Main";
import Home from "../../Page/Home/Home";
import AllProjects from "../../Page/AllProjects/AllProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/all-projects",
          element: <AllProjects></AllProjects>,
        },
      ],
  },
]);
