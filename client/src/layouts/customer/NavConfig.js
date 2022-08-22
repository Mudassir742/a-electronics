// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "Home",
    path: "/app/home",
    icon: getIcon("ant-design:home-filled"),
  },
  {
    title: "Product",
    path: "/app/products-list",
    icon: getIcon("fluent:production-24-filled"),
  },
];
export default navConfig;
