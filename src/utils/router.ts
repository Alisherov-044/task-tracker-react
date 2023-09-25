import { RouteInterface } from "../interface";
import { HomePage, AboutPage } from "../pages";

export const routes: RouteInterface[] = [
  {
    id: 1,
    path: "/",
    component: HomePage,
  },
  {
    id: 2,
    path: "/about",
    component: AboutPage,
  },
];
