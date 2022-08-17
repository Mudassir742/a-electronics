import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
//
import NotFound from "../pages/Page404";
import DashboardApp from "../pages/DashboardApp";
import Category from "src/pages/Category";
import CategoryForm from "src/components/forms/CategoryForm";
import Products from "src/pages/Product";
import ProductForm from "src/components/forms/ProductForm";
import Orders from "src/pages/Order";
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
      path: "404",
      element: <NotFound />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
