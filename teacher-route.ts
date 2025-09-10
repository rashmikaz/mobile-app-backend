import express from "express";
import { Teacher } from "./TeacherModel";
import {
  teacherSave,
  teacherGetAll,
  teacherDelete,
} from "./teacher-data-store";

const router = express.Router();

// Add a new teacher
router.post("/add", async (req, res) => {
  const teacher: Teacher = req.body;

  try {
    const newTeacher = await teacherSave(teacher);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: "Error adding teacher" });
  }
});

// Get all teachers
router.get("/all", async (req, res) => {
  try {
    const teachers = await teacherGetAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching teachers" });
  }
});

// Delete a teacher by ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await teacherDelete(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting teacher" });
  }
});

export default router;
