import React, { useState } from "react";
import { searchEmployees } from "../api";
import { ListGroup, Form, InputGroup } from "react-bootstrap";

const SearchBar = ({ setEmployees }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const results = await searchEmployees(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const selectEmployee = (employee) => {
    setEmployees([employee]); // Add selected employee to table
    setQuery(employee.Emp_Name); // Update search bar text
    setSuggestions([]); // Hide suggestions
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search Employee by Name or ID"
          value={query}
          onChange={handleSearch}
        />
      </InputGroup>

      {suggestions.length > 0 && (
        <ListGroup>
          {suggestions.map((emp) => (
            <ListGroup.Item key={emp.Emp_ID} onClick={() => selectEmployee(emp)} action>
              {emp.Emp_Name} (ID: {emp.Emp_ID})
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchBar;
