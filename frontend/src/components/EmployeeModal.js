import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addEmployee } from "../api";

const EmployeeModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    Emp_ID: "",
    Emp_Name: "",
    Manager_ID: "",
    Manager_Name: "",  // ✅ Added field
    Department: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await addEmployee({ ...formData, password: "12345678" });
      alert(response.message);
      handleClose();
    } catch (error) {
      alert(error.response?.data?.message || "Error adding employee");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Employee ID</Form.Label>
            <Form.Control type="text" name="Emp_ID" placeholder="Enter Employee ID" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="Emp_Name" placeholder="Enter Name" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Manager ID</Form.Label>
            <Form.Control type="text" name="Manager_ID" placeholder="Enter Manager ID" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Manager Name</Form.Label>
            <Form.Control type="text" name="Manager_Name" placeholder="Enter Manager Name" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" name="Department" placeholder="Enter Department" onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="success" onClick={handleSubmit}>Add Employee</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeModal;
