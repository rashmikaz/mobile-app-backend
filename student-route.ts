import express from "express";
import { Student } from "./StudentModel";
import {
  studentSave,
  studentGetAll,
  studentDelete,
} from "./student-data-store";

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

router.get("/all", async (req, res) => {
  try {
    const students = await studentGetAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await studentDelete(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting student" });
  }
});
