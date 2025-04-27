import { ROUTES } from "@/constants";
// import useAuthStore from "@/store/use-auth-store";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  // todo:

  const { isAuthenticated } = { isAuthenticated: true };

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};

export default PrivateRoute;
