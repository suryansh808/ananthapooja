const express = require("express");
const router = express.Router();
const Purohit = require("../models/Purohit");

// Add new Purohit
router.post("/", async (req, res) => {
  try {
    const purohit = await Purohit.create(req.body);
    res.status(201).json({ success: true, data: purohit });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// GET role based purohits with pagination
router.get("/", async (req, res) => {
  try {
     const role = req.query.role;
     const username = req.query.username;
     const filter = role === "admin" ? {} : { createdBy: username };
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [purohits, total] = await Promise.all([
      Purohit.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Purohit.countDocuments(filter)
    ]);

    res.json({
      success: true,
      data: purohits,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch {
    res.status(500).json({ success: false });
  }
});

// get all 
router.get("/all", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [purohits, total] = await Promise.all([
      Purohit.find({ status: "Active" }).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Purohit.countDocuments({ status: "Active" })
    ]);
    res.json({
      success: true,
      data: purohits,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch {
    res.status(500).json({ success: false });
  }
});

// UPDATE purohit
router.put("/:id", async (req, res) => {
  try {
    const updated = await Purohit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: updated });
  } catch {
    res.status(400).json({ success: false });
  }
});

// DELETE purohit
router.delete("/:id", async (req, res) => {
  try {
    await Purohit.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(400).json({ success: false });
  }
});

// TOGGLE status
router.patch("/:id/status", async (req, res) => {
  try {
    const purohit = await Purohit.findById(req.params.id);
    purohit.status = purohit.status === "Active" ? "Inactive" : "Active";
    await purohit.save();
    res.json({ success: true, data: purohit });
  } catch {
    res.status(400).json({ success: false });
  }
});



module.exports = router;
