import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <h1>Sidebar</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
