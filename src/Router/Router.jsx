import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import NotFound from "../Component/NotFound ";
import Orders from "../Component/Orders";
import Coupons from "../Component/CouponList/Coupons";
import Login from "../Component/From/Login";
import Myprofile from "../Component/MyProfile/Myprofile";
import Register from "../Component/From/Register";
import Brands from "../Component/Brands/Brands";
import PrivateRoutes from "../RouteProvider/PrivateRoutes";
import Banner from "../Component/Home/Banner";

const router = createBrowserRouter([
  {
    path: "/", // Use "/" for the root path
    element: <Home />,
    children: [
      {
     path: "/",
        element:<Banner></Banner>  // Render a custom component when navigating to /
      },
      {
      },

      {
        path: "coupons",
        element: <PrivateRoutes> <Coupons></Coupons></PrivateRoutes>,
      },
      {
        path: "brands",
        element: <Brands></Brands>
      },

      {
        path: "order",
        element: <Orders></Orders>, // Render a custom component when navigating to /order
      },
      {
        path: "login",
        element: <Login></Login> // Render a custom component when navigating to /order
      },
      {
        path: "register",
        element: <Register></Register>// Render a custom component when navigating to /order
      },
      {
        path: "myProfile",
        element: <PrivateRoutes> <Myprofile></Myprofile> </PrivateRoutes>,// Render a custom component when navigating to /order
      },
    
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>, // Redirect to a 404 page for unmatched paths
  },
]);

export default router;
