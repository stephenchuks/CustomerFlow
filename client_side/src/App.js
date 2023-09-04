import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  const [authToken, setAuthToken] = useState(null);

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  const handleLogout = () => {
    setAuthToken(null);
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
            <Route path="/registration" render={() => <Registration onRegistration={() => {}} />} />
            <Route path="/login">
              {authToken ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
            </Route>
            <Route path="/">
              {authToken ? (
                <div>
                  <p>Logged in as {authToken}</p>
                  {/* Include other authenticated content */}
                </div>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
