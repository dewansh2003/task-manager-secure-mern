// server/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Simple MongoDB connection
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

// 🔹 Basic route (check API working)
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API Running..." });
});

// 🔹 Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
