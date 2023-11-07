import { lazy } from "react";

const HomeScreen = lazy(
  () => import("../features/home/screens/HomeScreen/HomeScreen")
);

const LoginScreen = lazy(
  () => import("../features/auth/screens/LoginScreen/LoginScreen")
);

const OverViewScreen = lazy(
  () => import("../features/overview/screens/OverviewScreen/OverviewScreen")
);
const HealthRecordScreen = lazy(
  () =>
    import(
      "../features/health-records/screens/HealthRecordScreen/HealthRecordScreen"
    )
);

export const publicRoutes = [
  {
    path: "/",
    title: "Home",
    component: HomeScreen,
  },
  {
    path: "/login",
    title: "Login",
    component: LoginScreen,
  },
];

export const dashboardRoutes = [
  {
    path: "/overview",
    title: "Overview",
    component: OverViewScreen,
  },
  {
    path: "/health-records",
    title: "Health Record",
    component: HealthRecordScreen,
  },
];

const routes = [...publicRoutes, ...dashboardRoutes];
export default routes;
