import { TreadEnergy } from "../createTrade/createTrade.model.js";
import { Payment } from "./payment.model.js";

// Create Payment

export const createPaymentService = async (payload) => {
  // 1. Create the payment
  console.log(payload);
  const payment = await Payment.create(payload);

  // 2. Update TreadEnergy when payment is SUCCESS
  if (payment.status === "SUCCESS" && payment.tradeId) {
    console.log(payment.tradeId);
    await TreadEnergy.findByIdAndUpdate(
      payment.tradeId, // find by tradeId from payment
      { status: "sold" }, // 👈 update status (you can set SUCCESS, COMPLETED, etc.)
      { new: true }
    );
  }

  return payment;
};

// Get all payments
export const getAllPaymentsService = async () => {
  return await Payment.find().populate("buyerId sellerId", "email name");
};

// Get single payment
export const getPaymentByIdService = async (id) => {
  return await Payment.findById(id).populate("buyerId sellerId", "email name");
};

// Update status
export const updatePaymentStatusService = async (id, status) => {
  return await Payment.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  ).populate("buyerId sellerId", "email name");
};

// Delete payment
export const deletePaymentService = async (id) => {
  return await Payment.findByIdAndDelete(id);
};
