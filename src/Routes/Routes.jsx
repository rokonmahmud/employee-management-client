import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurShop from "../Pages/Shop/ourShop";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import PrivetRoute from "../Provider/PrivetRoute";
import Dashbord from "../Layout/Dashbord";
import CartSection from "../Pages/Cart/CartSection";
import UserData from "../Pages/Dashbord/Users/UserData";
import AddItem from "../Pages/Dashbord/AddItem/AddItem";
import AdminRoute from "../Provider/AdminRoute";
import ManageItem from "../Pages/Dashbord/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashbord/ManageItem/UpdateItem";
import ErrorElement from "../Pages/Shared/Error/ErrorElement";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "shop",
        element: (
          <PrivetRoute>
            <OurShop />
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashbord",
    element: (
      <PrivetRoute>
        <Dashbord />
      </PrivetRoute>
    ),
    children: [
      {
        path: "cart",
        element: <CartSection/>,
      },
    //  {
    //   path: "users",
    //   element: <AdminRoute><UserData/></AdminRoute>
    //  },
     {
      path: "additems",
      element: <AdminRoute><AddItem/></AdminRoute>
     },
     {
      path: "manageitems",
      element: <AdminRoute><ManageItem/></AdminRoute>
     },
     {
        path: "updateitem/:id",
        element: <UpdateItem/>,
        loader: ({params})=> fetch(`https://employee-management-server-six.vercel.app/menus/${params.id}`)
     },
    ],
  },
]);
