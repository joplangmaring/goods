import mongoose from "mongoose";

// Define the schema for the payment data
const SavePaymentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  planId: { type: String, required: true },
  planType: { type: String, required: true },
  investAmount: { type: Number, required: true },
  earnings: { type: String, required: false },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: Boolean, default: false }, // true if paid, false otherwise
  createdAt: { type: Date, default: Date.now },
});

// Create and export the model
export const SavePayment = mongoose.models.SavePayment || mongoose.model("SavePayment", SavePaymentSchema);
