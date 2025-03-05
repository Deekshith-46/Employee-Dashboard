const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Add Employee API
router.post("/add", async (req, res) => {
  const { password, Emp_ID, Emp_Name, Manager_ID, Manager_Name, Department } = req.body;

  if (password !== process.env.PASSWORD) {
    return res.status(401).json({ message: "Incorrect Password" });
  }

  try {
    const newEmployee = new Employee({
      Emp_ID,
      Emp_Name,
      Manager_ID,
      Manager_Name: Manager_Name || "Unknown", // ✅ Ensure it's stored
      Department,
    });

    await newEmployee.save();
    res.status(201).json({ message: "Employee Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Employees API (Ensure Manager Name is Sent)
router.get("/search", async (req, res) => {
  const { query } = req.query;
  console.log(query)
  try {
    const employees = await Employee.find({
      $or: [{ Emp_Name: { $regex: query, $options: "i" } }, { Emp_ID: query }],
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
