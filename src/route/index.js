import { Router } from "express";
import { userRoute } from "../app/module/user/user.route.js";
import { AuthRoute } from "../app/module/auth/auth.router.js";
import { CourseRoute } from "../app/module/courses/courses.route.js";
import { treadEnergyRoute } from "../app/module/createTrade/createTraderoute.js";

const router = Router();

const moduleRouters = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/courses",
    route: CourseRoute,
  },
  {
    path: "/treadEnergy",
    route: treadEnergyRoute,
  },
];

// here use the forEach method to register each module route
// This allows for easy expansion if more modules are added in the future
moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
