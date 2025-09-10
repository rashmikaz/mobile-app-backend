import { PrismaClient } from "@prisma/client";
import { Teacher } from "./TeacherModel";

const prisma = new PrismaClient();

export async function teacherSave(t: Teacher) {
  try {
    const newTeacher = await prisma.teacher.create({
      data: {
        fullName: t.fullName,
        email: t.email,
        nic: t.nic,
        address: t.address,
        subject: t.subject,
      },
    });
    console.log("Teacher Added:", newTeacher);
  } catch (err) {
    console.log("Error adding teacher:", err);
  }
}

export async function teacherGetAll() {
  try {
    const teachers = await prisma.teacher.findMany();
    return teachers;
  } catch (err) {
    console.log("Error fetching teachers:", err);
  }
}

export async function teacherDelete(id: number) {
  try {
    await prisma.teacher.delete({
      where: { id },
    });
    console.log("Teacher Deleted:", id);
  } catch (err) {
    console.log("Error deleting teacher:", err);
  }
}
