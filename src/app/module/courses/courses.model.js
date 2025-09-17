import { model, Schema } from "mongoose";

const CourseChapterSchema = new Schema(
  {
    courseChapterName: {
      type: String,
      required: true,
    },
    courseChapter: {
      type: String,
      required: true,
    },
    courseDetails: {
      type: String,
      required: true,
    },
    courseLink: {
      type: String,
      required: true,
    },
  },
  { _id: false } // prevents auto-creating _id for subdocuments
);

const CourseSchema = new Schema(
  {
    coursesImage: {
      type: String,
      required: true,
    },
    coursesTitle: {
      type: String,
      required: true,
      trim: true,
    },
    coursePrice: {
      type: Number,
      required: true,
    },
    courseDetail: {
      type: String,
      required: true,
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
