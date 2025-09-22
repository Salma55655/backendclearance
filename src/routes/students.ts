    // import express from "express";
    // import Student  from "../models/Student";

    // const router = express.Router();

    // // Get all students
    // router.get("/", async (req, res) => {
    //   const students = await Student.find();
    //   res.json(students);
    // });

    // // Get student by Mongo _id
    // router.get("/:id", async (req, res) => {
    //   const student = await Student.findById(req.params.id);
    //   if (!student) return res.status(404).json({ message: "Student not found" });
    //   res.json(student);
    // });

    // // Create new student
    // router.post("/", async (req, res) => {
    //   const student = new Student(req.body);
    //   await student.save();
    //   res.status(201).json(student);
    // });

    // // Update student
    // router.put("/:id", async (req, res) => {
    //   const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //   if (!updated) return res.status(404).json({ message: "Student not found" });
    //   res.json(updated);
    // });

    // export default router;
import express from "express";
import Student from "../models/Student";

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Get student by custom "id"
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ id: req.params.id }); // ✅ custom id
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Create new student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Update student by custom "id"
router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findOneAndUpdate(
      { id: req.params.id },  // ✅ custom id
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;
