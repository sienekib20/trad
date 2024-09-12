import { RouteType } from "../types";
import WelcomePage from "./web/home";

const Routes: RouteType[] = [
   {
      label: "",
      path: "/",
      element: <WelcomePage />,
      type: "public"
   }
];

export const AppRoutes = Routes;