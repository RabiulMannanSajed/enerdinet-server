import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./user.controller.js";

const route = Router();

route.post("/create-user", createUser);

route.get("/get-all-users", getAllUsers);

route.get("/:id", getUserById);

route.put("/:id", updateUser);

route.delete("/:id", deleteUser);

export const userRoute = route;
