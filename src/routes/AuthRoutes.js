import { lazy } from "react";

import { Navigate } from "react-router";

// project imports
import Loadable from "../ui-component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import UnprotectedRoute from "../utils/route-guard/UnprotectedRoute";

// login option 3 routing
const AuthLogin3 = Loadable(
  lazy(() => import("../views/authentication/authentication3/Login3"))
);
const AuthRegister3 = Loadable(
  lazy(() => import("../views/authentication/authentication3/Register3"))
);

// routes
const AuthRoutes = {
  path: "/",
  element: (
    <UnprotectedRoute>
      <MinimalLayout />
    </UnprotectedRoute>
  ),
  children: [
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <AuthLogin3 />,
    },
    {
      path: "/register",
      element: <AuthRegister3 />,
    },
  ],
};

export default AuthRoutes;
