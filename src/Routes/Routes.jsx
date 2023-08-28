import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home/Home";
import Main from "../Layout/Main";
import Order from "../components/pages/Order/Order";
import Offered from "../components/pages/Offered/Offered";
import SignUp from "../components/pages/SignUp/SignUp";
import Login from "../components/pages/Login/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../components/pages/Dashboard/Cart/MyCart";

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
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
