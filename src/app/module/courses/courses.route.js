import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  softDeleteCourse,
  updateCourse,
} from "./courses.collection.js";

const router = Router();

router.post("/", createCourse);

router.get("/", getAllCourses);

router.get("/:id", getCourseById);

router.patch("/:id", updateCourse);

router.delete("/:id", softDeleteCourse);

export default router;
