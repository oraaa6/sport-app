import { RouteObject } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import { Table } from "../pages/table/table";
import { MainLayout } from "@/layouts/main-layout/main-layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: "Page not found",
    children: [
      {
        path: "/",
        element: (
          <MainLayout>
            <Home />
          </MainLayout>
        ),
      },
      {
        path: "/table",
        element: (
          <MainLayout>
            <Table />
          </MainLayout>
        ),
      },
    ],
  },
];
