import './index.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import AddEmployee from "./components/AddEmployee";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  const [employees, setEmployees] = useState([]);

  return (
    <Container className="custom-container mt-4 p-4">
      <h1 className="custom-title">Employee Dashboard - 2</h1>
      <SearchBar setEmployees={setEmployees} />
      <AddEmployee />
      <EmployeeTable employees={employees} />
    </Container>
  );
};

export default App;
