import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home/Home";
import Main from "../Layout/Main";
import Order from "../components/pages/Order/Order";
import Offered from "../components/pages/Offered/Offered";

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
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/offered",
        element: <Offered></Offered>,
      },
    ],
  },
]);
