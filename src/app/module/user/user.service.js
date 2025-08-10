import { User } from "./user.model.js";

export const createUserIntoDB = async (userData) => {
  return await User.create(userData);
};

export const getAllUsersFromDb = async () => {
  return await User.find();
};

export const getUserByIdFromDb = async (id) => {
  return await User.findById(id);
};

export const updateUserIntoDB = async (id, updates) => {
  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10);
  }
  return await User.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteUserFromDb = async (id) => {
  return await User.findByIdAndDelete(id);
};
