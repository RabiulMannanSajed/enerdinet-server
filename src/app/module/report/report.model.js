import { model, Schema } from "mongoose";

const ReportSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  report: {
    type: String,
  },
});

export const Report = model("Report", ReportSchema);
