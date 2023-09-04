import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:8000/api/token/login/', {
      username: username,
      password: password,
    })
    .then((response) => {
      // Callback to inform the parent component (App.js) of successful login
      onLogin(response.data.auth_token);
    })
    .catch((error) => {
      console.error('Login failed', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
      <p>
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
}

export default Login;
