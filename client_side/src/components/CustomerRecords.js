import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function CustomerRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch customer records from your Django API when the component mounts
    axios.get('http://localhost:8000/api/allrecords/')
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching records', error);
      });
  }, []);

  return (
    <div>
      <h2>Customer Records</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            {/* Add more table headers for other fields */}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.first_name}</td>
              <td>{record.last_name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{record.city}</td>
              <td>{record.state}</td>
              <td>{record.zipcode}</td>
              {/* Render other record fields here */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerRecords;
