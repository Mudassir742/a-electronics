// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/main",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "all projects",
    path: "/dashboard/all-projects",
    icon: getIcon("fa-solid:project-diagram"),
  },
  {
    title: "all teams",
    path: "/dashboard/all-teams",
    icon: getIcon("fluent:people-team-28-filled"),
  },
  {
    title: "my tasks",
    path: "/dashboard/my-tasks",
    icon: getIcon("fluent:clipboard-task-list-ltr-24-filled"),
  },
];

export default navConfig;
