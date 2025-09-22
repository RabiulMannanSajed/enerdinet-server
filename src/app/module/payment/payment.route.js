import {
  createPayment,
  deletePayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus,
} from "./payment.controller";

const { Router } = require("express");

const route = Router();

route.post("/create-payment ", createPayment);
route.get("/get-all-payment", getAllPayments);
route.get("/:id", getPaymentById);
route.patch("/:id/status", updatePaymentStatus);
route.delete("/:id", deletePayment);

export const PaymentRoute = route;
