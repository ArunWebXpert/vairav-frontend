import { ROUTES } from "@/constants";
// import useAuthStore from "@/store/use-auth-store";
import { Navigate, Outlet, useLocation } from "react-router";

const GuestGuard = () => {
  // todo:
  const { isAuthenticated } = { isAuthenticated: false };
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
