import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getAllDeleteCourses,
  getCourseById,
  restoreCourse,
  softDeleteCourse,
  updateCourse,
} from "./courses.collection.js";

const route = Router();

route.post("/create-courses", createCourse);

route.get("/get-all-courses", getAllCourses);

route.get("/get-all-deleted-courses", getAllDeleteCourses);

route.get("/:id", getCourseById);

route.patch("/:id", updateCourse);

route.delete("/:id", softDeleteCourse);

route.patch("/:id/restore", restoreCourse);

export const CourseRoute = route;
