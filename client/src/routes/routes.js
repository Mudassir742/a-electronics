import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
//
import NotFound from "../pages/Page404";
import DashboardApp from "../pages/DashboardApp";
import MyTask from "src/pages/MyTasks";
import AllProjects from "src/pages/AllProjects";
import AllTeams from "src/pages/AllTeams";
import NewProjectForm from "src/components/forms/NewProjectForm";
import NewTaskForm from "src/components/forms/NewTaskForm";
import NewTeamForm from "src/components/forms/NewTeamForm";

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
          path: "all-projects",
          element: <AllProjects />,
        },
        {
          path: "all-teams",
          element: <AllTeams />,
        },
        {
          path: "my-tasks",
          element: <MyTask />,
        },
        {
          path: "all-projects/new-project",
          element: <NewProjectForm />,
        },
        {
          path: "all-teams/new-team",
          element: <NewTeamForm />,
        },
        {
          path: "my-task/new-task",
          element: <NewTaskForm />,
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
