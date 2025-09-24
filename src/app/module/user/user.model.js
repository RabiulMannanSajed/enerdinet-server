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
    userImage: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userImage: {
      type: String,
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

    payments: [
      {
        PMethod: {
          type: String,
          enum: ["Bkash", "Rocket", "Nagad", "Card"],
          required: true,
        },
        number: {
          type: String, // or Number if you only expect digits
          trim: true,
        },
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
