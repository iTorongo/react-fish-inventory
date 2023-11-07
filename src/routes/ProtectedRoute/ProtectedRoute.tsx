import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = true; // validate authenticate
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

interface ProtectedRouteProps {
  children: ReactNode;
}
export default ProtectedRoute;
