// UpdateRecord.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// UpdateRecord.js
// ... (previous code)

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
    const fetchRecordData = async () => {
      try {
        // Fetch the existing record data from your Django API based on the route parameter
        const response = await axios.get(`http://localhost:8000/api/records/${match.params.recordId}/`);
        setRecordData(response.data); // Set initial state with fetched data
      } catch (error) {
        console.error('Error fetching record', error);
      }
    };

    fetchRecordData(); // Call the async function to fetch data
  }, [match.params.recordId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecordData({ ...recordData, [name]: value });
  };

  const handleUpdateRecord = async () => {
    try {
      // Send a PUT request to update the record based on the route parameter
      await axios.put(`http://localhost:8000/api/records/update/${match.params.recordId}/`, recordData);
      // Handle success, e.g., show a success message or redirect to another page
      console.log('Record updated successfully');
    } catch (error) {
      console.error('Error updating record', error);
    }
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

        <Form.Group controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={recordData.state}
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

        <Form.Group controlId="formBasicZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="text"
            name="zipcode"
            value={recordData.zipcode}
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
