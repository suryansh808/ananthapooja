const express = require("express");
const router = express.Router();
const CallRequest = require("../models/CallRequest");

// post or create new request
router.post("/", async (req, res) => {
  try {
    const newRequest = await CallRequest.create(req.body);
    res.status(201).json({
      success: true,
      message: "Call request submitted successfully",
      data: newRequest
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

//fetch all the request 
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;
    const skip = (page - 1) * limit;

    const [requests, total] = await Promise.all([
      CallRequest.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      CallRequest.countDocuments()
    ]);

    res.json({
      success: true,
      data: requests,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Update request status
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await CallRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: "Status update failed" });
  }
});

module.exports = router;
