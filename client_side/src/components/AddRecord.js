import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddRecord() {
  const [recordData, setRecordData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',

    // Add other fields here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecordData({ ...recordData, [name]: value });
  };

  const handleAddRecord = () => {
    axios.post('http://localhost:8000/api/records/', recordData)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('Record added successfully', response.data);
      })
      .catch((error) => {
        console.error('Error adding record', error);
      });
  };

  return (
    <div>
      <h2>Add New Customer Record</h2>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={recordData.first_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Add more form fields for other record attributes */}
        <Button variant="primary" onClick={handleAddRecord}>
          Add Record
        </Button>
      </Form>
    </div>
  );
}

export default AddRecord;
