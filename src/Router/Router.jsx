import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Coupons from "../Component/CouponList/Coupons";
import Login from "../Component/From/Login";
import Myprofile from "../Component/MyProfile/Myprofile";
import Register from "../Component/From/Register";
import Brands from "../Component/Brands/Brands";                                     
import PrivateRoutes from "../RouteProvider/PrivateRoutes";
import Banner from "../Component/Home/Banner";
import BrandDetails from "../Component/Brands/BrandDetails"; // Import dynamic details component
import NotFound from "../Component/NotFound ";
import Theams from "../Component/Theams/Theams";
import PrivateCouponsPage from "../Component/PrivateCopunsPage/PrivateCouponsPage";
import ForgotPassword from "../Component/From/ForgotPassword";
import UpdateProfile from "../Component/MyProfile/UpdateProfile";

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
        path: "teams",
        element: <Theams />,
      },
      {
        path: "coupons",
        element: (
          <PrivateRoutes>
            <PrivateCouponsPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "brands/:brandId", // Dynamic route for brand details
        element: (
          <PrivateRoutes>
            <BrandDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login/forgot-password", // Separate path for forgot password
        element: <ForgotPassword />, // This is the page for forgotten password
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






      {
        path: "myProfile/update",  // New route for updating profile
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },



    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound> // Redirect to a 404 page for unmatched paths
  },
]);

export default router;
