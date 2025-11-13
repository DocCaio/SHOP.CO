import { createBrowserRouter } from "react-router-dom";
import Page404 from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Payments from "../Pages/Payments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
    ],
  },
]);
