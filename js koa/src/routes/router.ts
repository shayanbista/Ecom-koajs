import Router from "koa-router";

import {
  // dashboard_route,
  loginRoute,
  registrationRoute,
  productRoute,
  orders_route,
  adminDashboard,
} from "../auth/routes";

export const Routes = () => {
  const router = new Router();

  loginRoute(router);
  registrationRoute(router);
  productRoute(router);
  orders_route(router);
  adminDashboard(router);
  return router;

  // login_route(router);
  // registation_route(router);
  // // dashboard_route(router);

  // // orders_route(router);
};
