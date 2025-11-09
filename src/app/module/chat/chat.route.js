import { Router } from "express";
import { getChat, markAsRead, sendMessage } from "./chat.conroller.js";

const route = Router();

route.post("/send", sendMessage);

route.get("/get-all-messages", getChat);

route.patch("/mark-as-read/:id", markAsRead);

export const chatRoute = route;
