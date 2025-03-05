const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  Emp_ID: String,
  Emp_Name: String,
  Manager_ID: String,
  Manager_Name: String,  // ✅ Added field
  Department: String,
});

module.exports = mongoose.model("Employee", EmployeeSchema);
