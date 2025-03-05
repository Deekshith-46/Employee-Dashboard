const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Import CORS
require("dotenv").config();

const app = express();

// ✅ Use CORS Middleware to Allow Requests from Frontend
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

app.get("/api/get-password", (req, res) => {
  res.json({ password: process.env.PASSWORD });
});


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
