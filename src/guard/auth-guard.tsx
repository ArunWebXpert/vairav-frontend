import { ROUTES } from "@/constants";
import { useAuthenticate } from "@/hooks/use-authenticate";
// import useAuthStore from "@/store/use-auth-store";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuthenticated = useAuthenticate();

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};

export default PrivateRoute;
