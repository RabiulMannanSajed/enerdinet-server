import { Router } from "express";
import {
  createTreadEnergy,
  deleteTreadEnergy,
  getAllTreadEnergy,
  getTreadEnergyById,
  updateTreadEnergy,
} from "./createTrade.controller.js";

// Routes
const route = Router();

route.post("/create-treading", createTreadEnergy);

route.get("/get-all-treads", getAllTreadEnergy);

route.get("/:id", getTreadEnergyById);

route.patch("/:id", updateTreadEnergy);

route.delete("/:id", deleteTreadEnergy);

export const treadEnergyRoute = route;
