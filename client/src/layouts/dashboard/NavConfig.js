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
    title: "Category",
    path: "/dashboard/categories",
    icon: getIcon("ic:round-category"),
  },
  {
    title: "Product",
    path: "/dashboard/products",
    icon: getIcon("emojione-monotone:shopping-bags"),
  },
  {
    title: "Order",
    path: "/dashboard/orders",
    icon: getIcon("mdi:order-bool-descending-variant"),
  },
];
export default navConfig;
