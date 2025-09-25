import express from "express";
import Staff from "../models/Staff";

const router = express.Router();

// Get all staff
router.get("/", async (req, res) => {
  const staff = await Staff.find();
  res.json(staff);
});
 
// Add staff
router.post("/", async (req, res) => {
  const staff = new Staff(req.body);
  await staff.save();
  res.status(201).json(staff);
});

app.get("/api/staff/test", (req, res) => {
  res.json({ message: "✅ Staff route is working" });
});


export default router;
