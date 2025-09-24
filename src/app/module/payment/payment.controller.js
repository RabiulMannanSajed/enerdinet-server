import {
  createPaymentService,
  deletePaymentService,
  getAllPaymentsService,
  getPaymentByIdService,
  updatePaymentStatusService,
} from "./payment.service.js";

// Create
export const createPayment = async (req, res) => {
  try {
    const payment = await createPaymentService(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all
export const getAllPayments = async (req, res) => {
  try {
    const payments = await getAllPaymentsService();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get by id
export const getPaymentById = async (req, res) => {
  try {
    const payment = await getPaymentByIdService(req.params.id);
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update status
export const updatePaymentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await updatePaymentStatusService(req.params.id, status);

    if (!updated) return res.status(404).json({ message: "Payment not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
export const deletePayment = async (req, res) => {
  try {
    const deleted = await deletePaymentService(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Payment not found" });
    res.json({ message: "Payment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
