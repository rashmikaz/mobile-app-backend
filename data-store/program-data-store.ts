import { PrismaClient, Program } from "@prisma/client";

const prisma = new PrismaClient();

// Save a new Program
export async function programSave(p: Omit<Program, "id">) {
  try {
    const newProgram = await prisma.program.create({
      data: {
        name: p.name,
        duration: p.duration,
      },
    });
    console.log("Program Added:", newProgram);
    return newProgram;
  } catch (err) {
    console.error("Error adding program:", err);
  }
}

// Get all Programs
export async function programGetAll() {
  try {
    const programs = await prisma.program.findMany();
    return programs;
  } catch (err) {
    console.error("Error fetching programs:", err);
  }
}

// Delete a Program by ID
export async function programDelete(id: number) {
  try {
    await prisma.program.delete({
      where: { id },
    });
    console.log("Program Deleted:", id);
  } catch (err) {
    console.error("Error deleting program:", err);
  }
}

// Update a Program by ID
export async function programUpdate(
  id: number,
  data: Partial<Omit<Program, "id">>
) {
  try {
    const updatedProgram = await prisma.program.update({
      where: { id },
      data,
    });
    console.log("Program Updated:", updatedProgram);
    return updatedProgram;
  } catch (err) {
    console.error("Error updating program:", err);
  }
}
