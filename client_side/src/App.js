import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import CustomerRecords from './components/CustomerRecords'; // Import the component for displaying customer records

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false); // New state for tracking registration

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  const handleLogout = () => {
    setAuthToken(null);
  };

  const handleRegistration = () => {
    setIsRegistered(true); // Update registration status
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Authentication App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {authToken ? (
                  <Button onClick={handleLogout} variant="light">Logout</Button>
                ) : null}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/registration">
              {isRegistered ? <Redirect to="/login" /> : <Registration onRegistration={handleRegistration} />}
            </Route>
            <Route path="/login">
              {authToken ? <Redirect to="/records" /> : <Login onLogin={handleLogin} />}
            </Route>
            <Route path="/records">
              {authToken ? (
                <div>
                  <CustomerRecords /> {/* Display customer records when logged in */}
                </div>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
