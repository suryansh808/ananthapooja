const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // 🔗 Which Purohit was booked
    purohitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Purohit",
      required: true,
    },

    // 👤 User Details
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },

    // 💰 Payment Details (Razorpay)
    paymentId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    service: {
      type: String,
      required: true,
    }, 

    // 📅 Calendly Meeting Info (added later via webhook)
    calendlyEventId: {
      type: String,
    },
    meetingTime: {
      type: Date,
    },

    // 📌 Booking Status Lifecycle
    status: {
      type: String,
      enum: ["Paid", "Scheduled", "Completed", "Cancelled"],
      default: "Paid",
    },
  },
  { timestamps: true }
);

// ⚡ Index for fast queries
bookingSchema.index({ purohitId: 1 });
bookingSchema.index({ email: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model("Booking", bookingSchema);
