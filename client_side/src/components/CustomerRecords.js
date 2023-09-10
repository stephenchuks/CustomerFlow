// CustomerRecords.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CustomerRecords() {
  const [record, setRecord] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Fetch the specific customer record from the correct API endpoint
    axios.get(`http://localhost:8000/api/records/${id}/`)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((error) => {
        console.error('Error fetching record', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Customer Record</h2>
      <p>First Name: {record.first_name}</p>
      <p>Last Name: {record.last_name}</p>
      <p>Email: {record.email}</p>
      <p>Phone: {record.phone}</p>
      <p>Address: {record.address}</p>
      <p>City: {record.city}</p>
      <p>State: {record.state}</p>
      <p>Zipcode: {record.zipcode}</p>
      {/* Render other record fields here */}
      <Button variant="primary">Update Record</Button>
      <Button variant="danger">Delete Record</Button>
    </div>
  );
}

export default CustomerRecords;
