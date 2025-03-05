import React from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = ({ employees }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Name</th>
          <th>Manager ID</th>
          <th>Manager Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((emp) => (
            <tr key={emp.Emp_ID}>
              <td>{emp.Emp_ID}</td>
              <td>{emp.Emp_Name}</td>
              <td>{emp.Manager_ID}</td>
              <td>{emp.Manager_Name ? emp.Manager_Name : "No Manager"}</td> 
              <td>{emp.Department}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">No results found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
