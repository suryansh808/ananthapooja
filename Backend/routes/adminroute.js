const express = require("express");
const router = express.Router();
require("dotenv").config();
const operation = require("../models/AddOperation")
const jwt = require("jsonwebtoken");

router.post("/checkauthgmail", async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await operation.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: "Admin not found" });
    }
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token , role: admin.role , name: admin.name });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/adminverifyToken", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: "Token is valid" });
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
});


module.exports = router;