// Homepage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Homepage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch all records from your Django API
    axios
      .get('http://localhost:8000/api/allrecords/')
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
      <Link to="/add-record">
        <Button variant="primary">Add Record</Button> {/* Redirect to AddRecord Page */}
      </Link>
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
              <td>
                <Link to={`/customer-record/${record.id}`}>
                  {record.first_name}
                </Link>
              </td>
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

export default Homepage;
