import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./user.controller.js";

const route = Router();

//! http://localhost:5000/api/v1/eneginet/users/create-user

route.post("/create-user", createUser);

route.get("/get-all-users", getAllUsers);

route.get("/:id", getUserById);

route.patch("/:id", updateUser);

route.delete("/:id", deleteUser);

export const userRoute = route;
