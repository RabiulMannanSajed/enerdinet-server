import { model, Schema } from "mongoose";

const CourseChapterSchema = new Schema(
  {
    courseChapterName: {
      type: String,
    },
    courseChapter: {
      type: String,
    },
    courseDetails: {
      type: String,
    },
    courseLink: {
      type: String,
    },
  },
  { _id: false }
);

const CourseSchema = new Schema(
  {
    coursesImage: {
      type: String,
    },
    coursesTitle: {
      type: String,

      trim: true,
    },
    coursePrice: {
      type: Number,
    },
    courseDetail: {
      type: String,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    chapters: [CourseChapterSchema],
  },
  {
    timestamps: true,
  }
);

export const Course = model("Course", CourseSchema);
