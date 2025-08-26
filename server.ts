import express from "express";
import cors from "cors";
import studentRoute from "./student-route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/student", studentRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
