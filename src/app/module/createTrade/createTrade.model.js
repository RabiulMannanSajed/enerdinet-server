import { model, Schema } from "mongoose";

const TreadEnergySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // ✅ reference to User collection
      required: true,
    },
    sellEnergyAmount: {
      type: Number,
      required: true,
      min: 0, // ✅ no negative energy
    },
    price: {
      type: Number,
      required: true,
      min: 0, // ✅ no negative price
    },
  },
  { timestamps: true }
);

export const TreadEnergy = model("TreadEnergy", TreadEnergySchema);
