import axios from "axios";

export const searchEmployees = async (query) => {
  const { data } = await axios.get(`http://localhost:5000/api/employees/search?query=${query}`);
  return data;
};

export const addEmployee = async (employeeData) => {
  const { data } = await axios.post("http://localhost:5000/api/employees/add", employeeData);
  return data;
};
