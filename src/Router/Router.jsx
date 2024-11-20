import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Orders from "../Component/Orders";
import Coupons from "../Component/CouponList/Coupons";
import Login from "../Component/From/Login";
import Myprofile from "../Component/MyProfile/Myprofile";
import Register from "../Component/From/Register";
import Brands from "../Component/Brands/Brands";                                     
import PrivateRoutes from "../RouteProvider/PrivateRoutes";
import Banner from "../Component/Home/Banner";
import BrandDetails from "../Component/Brands/BrandDetails"; // Import dynamic details component
import NotFound from "../Component/NotFound ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />, // Render the banner component at the root path
      },
      {
        path: "coupons",
        element: (
          <PrivateRoutes>
            <Coupons />
          </PrivateRoutes>
        ),
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "brands/:brandId", // Dynamic route for brand details
        element: <PrivateRoutes>
          <BrandDetails />
        </PrivateRoutes>,
      },
      {
        path: "order",
        element: <Orders />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoutes>
            <Myprofile />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // Redirect to a 404 page for unmatched paths
  },
]);

export default router;
