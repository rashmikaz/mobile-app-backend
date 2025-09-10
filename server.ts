import express from "express";
import cors from "cors";
import studentRoute from "./route/student-route";
import teacherRoute from "./route/teacher-route";
import programRoute from "./route/program-route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/student", studentRoute);
app.use("/teacher", teacherRoute);
app.use("/program", programRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
