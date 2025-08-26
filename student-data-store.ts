import { PrismaClient } from "@prisma/client";
import { Student } from "./StudentModel";

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
