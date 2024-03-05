import {
  login,
  retrieveProducts,
  registration,
  storeProduct,
  retrieveSpecificProduct,
  removeProduct,
  removeUser,
  updateUser,
  updateProduct,
  store_orders,
  retrieve_orders,
  adminDash,
  removeProductImages,
  addProductImages,
} from "./controller";
import { userRole } from "./jwt-verification/token_verification";

export const loginRoute = (router: any) => {
  router.get("/login", (ctx: any) => {
    ctx.body = "this is login page";
    if (userRole) console.log(userRole);
    else {
      console.log(`user doesnot exist`);
    }
  });

  router.post("/login", login);
  router.patch("/user/:Id/Update", updateUser);
  router.delete("/user/:Id/", removeUser);
};

export const registrationRoute = (router: any) => {
  router.post("/registration", registration);
};

export const adminDashboard = (router: any) => {
  router.get("/adminDash", adminDash);
};

export const productRoute = (router: any) => {
  router.delete("/products/:Id", removeProduct);
  router.delete("/productImage/:Id/", removeProductImages);
  router.post("/productImages/:productId", addProductImages);
  router.patch("/products/:productId/update", updateProduct);
  router.post("/products", storeProduct);
  router.get("/products", retrieveProducts);
  router.get("/products/:productId", retrieveSpecificProduct);
};

// export const dashboard_route = async (router: any) => {
//   router.get("/dash", (ctx: any) => {
//     ctx.body = "hello from dash";
//   });
// };

export const orders_route = (router: any) => {
  router.post("/orders/user/:userId", store_orders);
  router.get("/user/:userId/orders/", retrieve_orders);
};
