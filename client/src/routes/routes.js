import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
//
import NotFound from "../pages/Page404";
import DashboardApp from "../pages/DashboardApp";
import Category from "src/pages/Category";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/dashboard/main" replace />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "main",
          element: <DashboardApp />,
        },
        {
          path: "categories",
          element: <Category />,
        },
      ],
    },
    {
      path: "404",
      element: <NotFound />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
