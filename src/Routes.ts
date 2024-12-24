import DashboardContent from "./components/Dashboard/DashboardContent";
import DashLayout from "./layouts/DashLayout";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";


const routes = [
  {
    path: "/",
    element: HomeLayout,
    children:[
      {
      path: "",
      element:Home,
      children: [
        { path: "", element:"" },
      ],
      }
    ]
  },
  {
    path: "dashboard",
    element: DashLayout,
    children: [
      {
        path: "",
        element: DashboardContent,
        children: [
        ],
      },
    ],
  },
];

export default routes;
