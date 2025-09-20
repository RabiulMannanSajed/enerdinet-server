import { TreadEnergy } from "./createTrade.model.js";

// ✅ Create a new trade
export const createTreadEnergyIntoDB = async (data) => {
  return await TreadEnergy.create(data);
};

// ✅ Get all trades
export const getAllTreadEnergyFromDb = async () => {
  return await TreadEnergy.find().populate("userId", "name email"); // populate user
};

// ✅ Get trade by ID
export const getTreadEnergyByIdFromDb = async (id) => {
  return await TreadEnergy.findById(id).populate("userId", "name email");
};

// ✅ Update trade
export const updateTreadEnergyIntoDB = async (id, data) => {
  return await TreadEnergy.findByIdAndUpdate(id, data, { new: true });
};

// ✅ Delete trade
export const deleteTreadEnergyFromDb = async (id) => {
  return await TreadEnergy.findByIdAndDelete(id);
};
