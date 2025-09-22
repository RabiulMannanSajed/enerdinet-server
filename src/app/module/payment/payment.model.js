import { model, Schema } from "mongoose";
import crypto from "crypto";

const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "12345678901234567890123456789012"; // must be 32 chars
const IV_LENGTH = 16;

// 🔒 Encrypt
function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text.toString());
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

// 🔓 Decrypt
function decrypt(text) {
  if (!text) return "";
  const parts = text.split(":");
  const iv = Buffer.from(parts.shift(), "hex");
  const encryptedText = Buffer.from(parts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const PaymentSchema = new Schema(
  {
    buyerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    sellerId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    // 🔒 Encrypted fields
    energyAmount: {
      type: String,
      required: true,
      set: (val) => encrypt(val.toString()), // save encrypted
      get: (val) => Number(decrypt(val)), // return as Number
    },
    amount: {
      type: String,
      required: true,
      set: (val) => encrypt(val.toString()),
      get: (val) => Number(decrypt(val)),
    },
    paymentMethod: {
      type: String,
      enum: ["BKASH", "NAGAD", "ROCKET", "CARD"],
      required: true,
      set: (val) => encrypt(val),
      get: (val) => decrypt(val),
    },
    phoneNumber: {
      type: String,
      required: true,
      set: (val) => encrypt(val),
      get: (val) => decrypt(val),
    },

    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED"],
      default: "PENDING",
    },
  },
  { timestamps: true, toJSON: { getters: true }, toObject: { getters: true } }
);

export const Payment = model("Payment", PaymentSchema);
