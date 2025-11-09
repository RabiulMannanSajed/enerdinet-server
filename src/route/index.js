import { Router } from "express";
import { userRoute } from "../app/module/user/user.route.js";
import { AuthRoute } from "../app/module/auth/auth.router.js";
import { CourseRoute } from "../app/module/courses/courses.route.js";
import { treadEnergyRoute } from "../app/module/createTrade/createTraderoute.js";
import { PaymentRoute } from "../app/module/payment/payment.route.js";
import { chatRoute } from "../app/module/chat/chat.route.js";

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
  {
    path: "/payment",
    route: PaymentRoute,
  },
  {
    path: "/chat",
    route: chatRoute,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
