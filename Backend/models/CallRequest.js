const mongoose = require("mongoose");

const callRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    pincode: { type: String, required: true },
    message: { type: String },
    consultancy: { type: String, required: true },
    status: {
      type: String,
      enum: ["New", "Contacted", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CallRequest", callRequestSchema);
