import { lazy } from "react";
import { Navigate } from "react-router";

// project imports
import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";
import AuthGuard from "../utils/route-guard/AuthGard";

import AboutInfo from "../views/dashboard/AboutInfo";
import ContactInfo from "../views/dashboard/ContactInfo";
import ImageGallery from "../views/dashboard/ImageGallery";
import Testimonial from "../views/dashboard/Testimonial";
import AddServices from "../views/Services/AddServices";
import ServicesInfo from "../views/Services/ServicesInfo";
import AddWork from "../views/Work/AddWork";
import WorkCategories from "../views/Work/WorkCategories";
import WorkInfo from "../views/Work/WorkInfo";

// dashboard routing
const Dashboard = Loadable(lazy(() => import("../views/dashboard/Dashboard")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/",
      element: <Navigate to="/dashboard/" />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/aboutinfo",
      element: <AboutInfo />,
    },
    {
      path: "/contactinfo",
      element: <ContactInfo />,
    },
    {
      path: "/imagegallery",
      element: <ImageGallery />,
    },
    {
      path: "/testimonial",
      element: <Testimonial />,
    },
    {
      path: "/dashboard/addservices",
      element: <AddServices />,
    },
    {
      path: "/dashboard/servicesinfo",
      element: <ServicesInfo />,
    },
    {
      path: "/dashboard/addwork",
      element: <AddWork />,
    },
    {
      path: "/dashboard/workcategories",
      element: <WorkCategories />,
    },
    {
      path: "/dashboard/workinfo",
      element: <WorkInfo />,
    },
  ],
};

export default MainRoutes;
