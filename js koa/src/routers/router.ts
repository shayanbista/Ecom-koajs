import Router from "koa-router";

import {
  loginRoute,
  registrationRoute,
  productRoute,
  ordersRoute,
  adminDashboard,
  esewaGateway,
} from "./routes";

export const Routes = () => {
  const router = new Router();

  loginRoute(router);
  registrationRoute(router);
  productRoute(router);
  ordersRoute(router);
  adminDashboard(router);
  esewaGateway(router);
  return router;
};
