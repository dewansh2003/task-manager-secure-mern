// server/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 🔹 Routes import
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task_manager");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Error:", err.message);
    process.exit(1);
  }
};

connectDB();

// 🔹 Basic route
app.get("/", (req, res) => {
  res.send("Task Manager API Running...");
});

// 🔹 API routes
app.use("/api/tasks", taskRoutes);

// 🔹 Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
