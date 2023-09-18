// UpdateRecord.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UpdateRecord({ match }) {
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

  useEffect(() => {
    // Fetch the existing record data from your Django API based on the route parameter
    axios.get(`http://localhost:8000/api/records/update/${match.params.id}`)
      .then((response) => {
        setRecordData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching record', error);
      });
  }, [match.params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecordData({ ...recordData, [name]: value });
  };

  const handleUpdateRecord = () => {
    axios.put(`http://localhost:8000/api/records/update/${match.params.id}`, recordData)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('Record updated successfully', response.data);
      })
      .catch((error) => {
        console.error('Error updating record', error);
      });
  };

  return (
    <div>
      <h2>Update Customer Record</h2>
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
        <Button variant="primary" onClick={handleUpdateRecord}>
          Update Record
        </Button>
      </Form>
    </div>
  );
}

export default UpdateRecord;
