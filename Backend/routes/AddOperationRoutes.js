const express = require("express");
const router = express.Router();
const OperationTeam = require("../models/AddOperation");

// CREATE
router.post("/", async (req, res) => {
  try {
    const member = await OperationTeam.create(req.body);
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// READ (Paginated)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [members, total] = await Promise.all([
      OperationTeam.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      OperationTeam.countDocuments(),
    ]);

    res.json({
      success: true,
      data: members,
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

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await OperationTeam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: updated });
  } catch {
    res.status(400).json({ success: false });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await OperationTeam.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(400).json({ success: false });
  }
});

module.exports = router;
