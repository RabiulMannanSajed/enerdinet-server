import {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getCourseByIdFromDB,
  softDeleteCourseFromDB,
  updateCourseIntoDB,
} from "./courses.service.js";

// Create
export const createCourse = async (req, res) => {
  try {
    const course = await createCourseIntoDB(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all
export const getAllCourses = async (req, res) => {
  try {
    const courses = await getAllCoursesFromDB();
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single
export const getCourseById = async (req, res) => {
  try {
    const course = await getCourseByIdFromDB(req.params.id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update
export const updateCourse = async (req, res) => {
  try {
    const course = await updateCourseIntoDB(req.params.id, req.body);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Soft delete
export const softDeleteCourse = async (req, res) => {
  try {
    const course = await softDeleteCourseFromDB(req.params.id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res.json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
