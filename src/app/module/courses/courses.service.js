import { Course } from "./courses.model.js";

// Create a course
export const createCourseIntoDB = async (payload) => {
  return await Course.create(payload);
};

// Get all courses (exclude soft-deleted)
export const getAllCoursesFromDB = async () => {
  return await Course.find({ isDeleted: false });
};

// Get single course
export const getCourseByIdFromDB = async (id) => {
  return await Course.findOne({ _id: id, isDeleted: false });
};

// Update course
export const updateCourseIntoDB = async (id, payload) => {
  return await Course.findByIdAndUpdate(id, payload, { new: true });
};

// Soft delete course
export const softDeleteCourseFromDB = async (id) => {
  return await Course.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
