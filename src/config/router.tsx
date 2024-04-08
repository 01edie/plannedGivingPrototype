import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import EntryGraphs from "../views/EntryGraphs";
import Dashboard from "../views/Dashboard";
import { menuList } from "./menuConfig";

const routes = menuList.map((e) => ({
  path: e.path,
  element: <e.element />,
  index: !!e.index
}));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
]);
