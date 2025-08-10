import { Router } from "express";
import { userRoute } from "../app/module/user/user.route.js";

const router = Router();

const moduleRouters = [
  {
    path: "/users",
    route: userRoute,
  },
];

// here use the forEach method to register each module route
// This allows for easy expansion if more modules are added in the future
moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
