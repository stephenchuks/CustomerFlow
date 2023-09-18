import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import Registration from './components/Registration';
import Login from './components/Login';
import Homepage from './components/Homepage';
import AddRecord from './components/AddRecord'; // Import the AddRecord component
import CustomerRecords from './components/CustomerRecords';
import UpdateRecord from './components/UpdateRecord'; // Import the UpdateRecord component
import DeleteRecord from './components/DeleteRecord'; // Import the DeleteRecord component

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  const handleLogout = () => {
    // Send a POST request to the Djoser logout endpoint to invalidate the token
    console.log(authToken)
    axios
      .post('http://localhost:8000/api/token/logout/')
      .then(() => {
        setAuthToken(null);
      })
      .catch((error) => {
        console.error('Error logging out', error);
      });
  };
  

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>CustomerFlow</Navbar.Brand>
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
        <Homepage />
      </div>
    ) : (
      <Redirect to="/login" />
    )}
  </Route>
  <Route path="/add-record">
    {authToken ? (
      <div>
        <AddRecord />
      </div>
    ) : (
      <Redirect to="/login" />
    )}
  </Route>
  <Route path="/customer-record/:recordId" component={CustomerRecords} />
  <Route path="/update-record/:recordId" component={UpdateRecord} /> {/* Add this route */}
  <Route path="/delete-record/:recordId" component={DeleteRecord} /> {/* Add this route */}
  <Redirect from="/" to="/login" />
</Switch>

        </Container>
      </div>
    </Router>
  );
}

export default App;