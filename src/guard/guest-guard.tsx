import { ROUTES } from "@/constants";
import { useAuthenticate } from "@/hooks/use-authenticate";
// import useAuthStore from "@/store/use-auth-store";
import { Navigate, Outlet, useLocation } from "react-router";

const GuestGuard = () => {
  const isAuthenticated = useAuthenticate();

  const { pathname } = useLocation();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  if (pathname === "/") {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
export default GuestGuard;
