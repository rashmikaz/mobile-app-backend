import express from "express";
import { Program } from "@prisma/client";
import {
  programSave,
  programGetAll,
  programDelete,
  programUpdate,
} from "../data-store/program-data-store";

const router = express.Router();

// Create a new Program
router.post("/add", async (req, res) => {
  const program: Omit<Program, "id"> = req.body;

  try {
    const newProgram = await programSave(program);
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(500).json({ error: "Error adding program" });
  }
});

// Get all Programs
router.get("/all", async (req, res) => {
  try {
    const programs = await programGetAll();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching programs" });
  }
});

// Delete a Program by ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await programDelete(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting program" });
  }
});

// Update a Program by ID
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data: Partial<Omit<Program, "id">> = req.body;

  try {
    const updatedProgram = await programUpdate(Number(id), data);
    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(500).json({ error: "Error updating program" });
  }
});

export default router;
