import { PrismaClient } from "@prisma/client";
import { Student } from "../model/StudentModel";

const prisma = new PrismaClient();

export async function studentSave(s: Student) {
  try {
    const newStudent = await prisma.student.create({
      data: {
        firstName: s.firstName,
        email: s.email,
        nic: s.nic,
        address: s.address,
        program: s.program,
      },
    });
    console.log("Student Added :", newStudent);
  } catch (err) {
    console.log("error adding student", err);
  }
}
export async function studentGetAll() {
  try {
    const students = await prisma.student.findMany();
    return students;
  } catch (err) {
    console.log("error fetching students", err);
  }
}

export async function studentDelete(id: number) {
  try {
    await prisma.student.delete({
      where: { id },
    });
    console.log("Student Deleted :", id);
  } catch (err) {
    console.log("error deleting student", err);
  }
}
