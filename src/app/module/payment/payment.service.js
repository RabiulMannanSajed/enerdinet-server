import { Payment } from "./payment.model.js";

// Create Payment
export const createPaymentService = async (payload) => {
  return await Payment.create(payload);
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
