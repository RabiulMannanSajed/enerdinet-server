import { User } from "./user.model.js";
import bcrypt from "bcryptjs";

export const createUserIntoDB = async (userData) => {
  const { username, email, password } = userData;
  const existingUser = await User.findOne({ email });
  // Check if user already exists
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash the password

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return newUser;
};

export const getAllUsersFromDb = async () => {
  return await User.find();
};

export const getUserByIdFromDb = async (id) => {
  return await User.findById(id);
};

export const updateUserIntoDB = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteUserFromDb = async (id) => {
  return await User.findByIdAndDelete(id);
};
