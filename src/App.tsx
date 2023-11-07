import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardLayout, DefaultLayout } from "./components/layout/";
import { publicRoutes, dashboardRoutes } from "./routes";
import { Loader } from "./components/atoms";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import NotFound from "./features/not-found/screens/NotFound/NotFound";
import "./App.scss";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<DefaultLayout />}>
          {publicRoutes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route element={<DashboardLayout />}>
          {dashboardRoutes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <ProtectedRoute>
                      <Component />
                    </ProtectedRoute>
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
