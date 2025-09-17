import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    myFinishedCourses: [
      {
        courseId: {
          type: Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },
        chapters: [
          {
            chapterId: {
              type: Schema.Types.ObjectId,
              ref: "Chapter", // Assuming you have a Chapter model
              required: true,
            },
            isFinished: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
    ],

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    //TODO:  work on this later
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", UserSchema);
