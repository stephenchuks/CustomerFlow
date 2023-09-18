import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function CustomerRecords() {
  const [record, setRecord] = useState({});
  const { recordId } = useParams(); // Change `id` to `recordId`

  useEffect(() => {
    // Fetch the specific customer record from the correct API endpoint
    axios.get(`http://localhost:8000/api/records/${recordId}/`)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((error) => {
        console.error('Error fetching record', error);
      });
  }, [recordId]);

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
      <Link to={`/update-record/${recordId}`}> {/* Navigate to the update page */}
        <Button variant="primary">Update Record</Button>
      </Link>
      <Link to={`/delete-record/${recordId}`}> {/* Navigate to the delete page */}
        <Button variant="danger">Delete Record</Button>
      </Link>
    </div>
  );
}

export default CustomerRecords;
