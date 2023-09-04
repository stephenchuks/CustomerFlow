import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

function Registration({ onRegistration }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleRegistration = () => {
    axios
      .post('http://localhost:8000/api/auth/users/', {
        email: email,
        username: username,
        password: password,
      })
      .then(() => {
        // Display a success message
        alert('Registration successful! You can now log in.');

        // Clear input fields
        setEmail('');
        setUsername('');
        setPassword('');

        // Callback to inform the parent component (App.js) of successful registration
        onRegistration();

        // Set the state to trigger the redirection
        setRedirectToLogin(true);
      })
      .catch((registrationError) => {
        console.error('Registration failed', registrationError);
      });
  };

  if (redirectToLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Register</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleRegistration}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Registration;
