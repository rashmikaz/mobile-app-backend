import express from "express";
import { Student } from "./StudentModel";
import { studentSave } from "./student-data-store";

const router = express.Router();

router.post("/add", async (req, res) => {
  const student: Student = req.body;

  try {
    const newStudent = await studentSave(student);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: "Error adding student" });
  }
});

export default router;
