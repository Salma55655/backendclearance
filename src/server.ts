import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import studentRoutes from "./routes/students";
import staffRoutes from "./routes/staff";



const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const MONGO_URI = "mongodb+srv://salmaahmed:l87pip9tO3UbTMiO@cluster0.8w0m0dt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// API routes
app.use("/api/students", studentRoutes);
app.use("/api/staff", staffRoutes);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
