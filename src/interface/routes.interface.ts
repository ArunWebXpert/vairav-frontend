export interface IPrivateRoutes {
  DASHBOARD: string;
}

export interface IPublicRoutes {
  LOGIN: "/login";
}

export interface IRoutes extends IPrivateRoutes, IPublicRoutes {}
