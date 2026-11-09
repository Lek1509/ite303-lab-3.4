// import express from 'express';

// const app = express();
// app.use((req, res, next) =>{
//     console.log(`${req.method} ${req.path}`);
//     next();

// });

// app.get("/students", (req, res) => {
//     const course = String(req.query.course ?? "all courses");

//     res.status(200).json({
//       message: "Student information request",
//       course,
//     });
//   });
//   app.get("/students/:id", (req, res) => {
//     res.status(200).json({
//       message: "Student request received",
//       studentId: req.params.id,
//     });
//   });

// app.listen(4000, () => {
//   console.log('Server running at http://localhost:4000');

// });

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Student Information API",
//     course: "ITE 303",
//   });
// });

// app.get("/students", (req, res) => {
//   const course = String(req.query.course ?? "all courses");

//   res.status(200).json({
//     message: "Student information request",
//     course,
//   });
// });

// app.get("/students/:id", (req, res) => {
//   res.status(200).json({
//     message: "Student request received",
//     studentId: req.params.id,
//   });
// });

// // Part G — POST /students
// app.post("/students", (req, res) => {
//   const { name, course } = req.body;

//   if (
//     typeof name !== "string" ||
//     name === "" ||
//     typeof course !== "string" ||
//     course === ""
//   ) {
//     return res.status(400).json({
//       message: "name and course are required",
//     });
//   }

//   return res.status(200).json({
//     message: "Student received",
//     student: {
//       name,
//       course,
//     },
//   });
// });

// app.use((req, res) => {
//   res.status(404).json({
//     message: "Route not found",
//   });
// });
import "dotenv/config";
import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import pool from "./db.js";

const app = express();

app.use(express.json());

// Routes
app.use("/students", studentRoutes);

pool
  .query("SELECT NOW()")
  .then(() => console.log("Database connected successfully"))
  .catch(() =>
    console.error(
      "Database connection failed. Check .env, Supabase, and your network.",
    ),
  );

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
