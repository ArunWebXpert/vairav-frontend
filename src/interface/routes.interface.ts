export interface IPrivateRoutes {
  DASHBOARD: string;
}

export interface IPublicRoutes {
  LOGIN: string;
}

export interface IRoutes extends IPrivateRoutes, IPublicRoutes {}
