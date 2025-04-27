import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { Route, Routes } from "react-router";

const ProjectRoutes = () => {
  const { isAuthenticated } = { isAuthenticated: true };

  return (
    <Routes>
      {/* Public Routes */}
      {!isAuthenticated && <Route path="/*" element={<PublicRoutes />} />}

      {/* Private Routes */}
      {isAuthenticated && <Route path="/*" element={<PrivateRoutes />} />}
    </Routes>
  );
};

export default ProjectRoutes;
