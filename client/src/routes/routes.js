import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
import CustomerLayout from "src/layouts/customer";
//dashboard pages
import NotFound from "../pages/Page404";
import DashboardApp from "../pages/dashboard/DashboardApp";
import Category from "src/pages/dashboard/Category";
import Products from "src/pages/dashboard/Product";
import Orders from "src/pages/dashboard/Order";
import CategoryForm from "src/components/forms/CategoryForm";
import ProductForm from "src/components/forms/ProductForm";
//customer pages
import Home from "src/pages/customer/Home";
import CustomerProducts from "src/pages/customer/Products";
import ShoppingCart from "src/pages/customer/ShoppingCart";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/app/home" replace />,
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
        {
          path: "categories/category-form",
          element: <CategoryForm />,
        },
        {
          path: "categories/category-form/:categoryId",
          element: <CategoryForm />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/product-form",
          element: <ProductForm />,
        },
        {
          path: "products/product-form/:productId",
          element: <ProductForm />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/app",
      element: <CustomerLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "products-list",
          element: <CustomerProducts />,
        },
        {
          path: "cart",
          element: <ShoppingCart />,
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
