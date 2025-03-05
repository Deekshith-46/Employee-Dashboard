import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PasswordModal from "./PasswordModal";
import EmployeeModal from "./EmployeeModal";

const AddEmployee = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);

  const handlePasswordSuccess = () => {
    setShowPasswordModal(false);
    setShowEmployeeModal(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowPasswordModal(true)}>Add Employee</Button>
      
      <PasswordModal show={showPasswordModal} handleClose={() => setShowPasswordModal(false)} handleSuccess={handlePasswordSuccess} />
      
      <EmployeeModal show={showEmployeeModal} handleClose={() => setShowEmployeeModal(false)} />
    </div>
  );
};

export default AddEmployee;
