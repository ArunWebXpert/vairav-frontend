import { IPrivateRoutes, IPublicRoutes, IRoutes } from "@/interface";

export const clientDetails: string = "/client/details";

const privateRoutes: IPrivateRoutes = {
  DASHBOARD: "/",
};

const publicRoutes: IPublicRoutes = {
  LOGIN: "/login",
};

const routes: IRoutes = { ...publicRoutes, ...privateRoutes };

export { routes as ROUTES };
