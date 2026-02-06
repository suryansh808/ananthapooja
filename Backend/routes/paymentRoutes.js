const express = require("express");
const router = express.Router();
const razorpay = require("../config/razorpay");
const Booking = require("../models/Booking");
const crypto = require("crypto");

router.post("/create-order", async (req, res) => {
  //  console.log(req.body);
  const order = await razorpay.orders.create({
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  });
  res.json(order);
});

router.post("/confirm", async (req, res) => {
   console.log("confirm request",req.body)
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, purohitId, user } = req.body;

  const generated = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated !== razorpay_signature)
    return res.status(400).json({ error: "Payment verification failed" });

  const booking = await Booking.create({
    purohitId,
    userName: user.name,
    email: user.email,
    phone: user.phone,
    amount: user.amount,
    service: user.service,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    status: "Paid"
  });

  res.json({ bookingId: booking._id });
});

router.get("/bookingdetails", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [bookingdata, total] = await Promise.all([
      Booking.find().sort({ createdAt: -1 }).skip(skip).limit(limit)
      .populate({
          path: "purohitId",
          select: "name phone city state experience calendlyLink createdBy  specializations"
        }),
      Booking.countDocuments(),
    ]);

    res.json({
      success: true,
      data: bookingdata,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch {
    res.status(500).json({ success: false });
  }
});

router.post("/webhook", async (req, res) => {
  if (req.body.event === "invitee.created") {
    const bookingId = req.body.payload.questions_and_answers?.[0]?.answer;
    const booking = await Booking.findById(bookingId);

    booking.meetingTime = req.body.payload.event.start_time;
    booking.status = "Scheduled";
    await booking.save();
  }
  res.sendStatus(200);
});




module.exports = router;
