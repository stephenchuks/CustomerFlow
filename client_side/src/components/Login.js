import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize history

  useEffect(() => {
    // Check if an authentication token exists in localStorage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Automatically log in the user if a token is found
      onLogin(authToken);
      history.push('/records'); // Redirect to the homepage
    }
  }, [onLogin, history]);

  const handleLogin = () => {
    axios
      .post('http://localhost:8000/api/token/login/', {
        username: username,
        password: password,
      })
      .then((response) => {
        // Store the authentication token in localStorage
        localStorage.setItem('authToken', response.data.auth_token);

        // Callback to inform the parent component (App.js) of successful login
        onLogin(response.data.auth_token);

        // Redirect to the homepage on successful login
        history.push('/records');
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
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
