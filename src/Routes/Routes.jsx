import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home/Home";
import Main from "../Layout/Main";
import Order from "../components/pages/Order/Order";
import Offered from "../components/pages/Offered/Offered";
import SignUp from "../components/pages/SignUp/SignUp";
import Login from "../components/pages/Login/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../components/pages/Dashboard/Cart/MyCart";
import PageNotFound from "../PageNotFound/PageNotFound";
import AllUsers from "../components/pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../components/pages/Dashboard/AddItem/AddItem";
import ManageItems from "../components/pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../components/pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../components/pages/Dashboard/Payment/Payment";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "manageItems/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mobile-data/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
