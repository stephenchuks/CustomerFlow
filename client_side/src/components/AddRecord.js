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
    // Retrieve the JWT token from localStorage
    const authToken = localStorage.getItem('authToken');

    // Make the API request with the token in the headers
    axios.post('http://localhost:8000/api/records/add/', recordData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      // Handle success, e.g., show a success message
      console.log('Record added successfully', response.data);
    })
    .catch((error) => {
      // Handle errors, including 401 Unauthorized
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

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={recordData.last_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={recordData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={recordData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={recordData.address}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={recordData.city}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={recordData.state}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            name="zipcode"
            value={recordData.zipcode}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Add more form fields for other record attributes here */}
        
        <Button variant="primary" onClick={handleAddRecord}>
          Add Record
        </Button>
      </Form>
    </div>
  );
}

export default AddRecord;
