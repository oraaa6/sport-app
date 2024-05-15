import { RouteObject } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import { Table } from "../pages/table/table";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: "Page not found",
    children: [
      { path: "/", element: <Home /> },
      { path: "/table", element: <Table /> },
    ],
  },
];
