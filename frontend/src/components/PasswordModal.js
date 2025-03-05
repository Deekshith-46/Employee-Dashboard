import React, { useState,useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const PasswordModal = ({ show, handleClose, handleSuccess }) => {
  const [password, setPassword] = useState("");
  const [storedPassword, setStoredPassword] = useState("");

  useEffect(() => {
    // Fetch password from backend on component mount
    axios.get("http://localhost:5000/api/get-password")
      .then(response => setStoredPassword(response.data.password))
      .catch(error => console.error("Error fetching password", error));
  }, []);

  const handleSubmit = () => {
    if (password === storedPassword) {
      handleSuccess();
      setPassword(""); // Clear password after success
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordModal;
