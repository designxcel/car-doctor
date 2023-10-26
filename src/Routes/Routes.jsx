import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/Registration/SignUp";
import Login from "../Pages/Registration/Login";
import AddServices from "../Pages/AdminPanel/AddServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CartDetails from "../Pages/Cart/CartDetails";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
            loader : () => fetch('services.json')
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/addservices",
          element: <AddServices></AddServices>
        },
        {
          path: "/servicedetails/:id",
          element: <ServiceDetails></ServiceDetails>
          // loader: () => fetch('services.json')
        },
        {
          path: "/cartdetails",
          element: <CartDetails></CartDetails>
        }
      ]
    },
  ]);

export default Routes;