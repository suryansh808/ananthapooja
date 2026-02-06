const mongoose = require("mongoose");

const purohitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String },

    calendlyLink: { type: String, required: true },
    photo: { type: String },

    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    serviceRadius: { type: Number, default: 10 },

    experience: { type: Number, required: true },
    specializations: [{ type: String }],
    languages: [{ type: String }],

    travelAvailable: { type: Boolean, default: false },

    vedaKnowledge: { type: String },
    guruName: { type: String },
    certification: { type: String },

    availableDays: [{ type: String }],
    timeSlots: [{ type: String }],
    createdBy: { type: String },
    role: { type: String },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Purohit", purohitSchema);
