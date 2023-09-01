import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              {isAuthenticated ? (
                <li>Signed in as <span>{/* Display username here */}</span></li>
              ) : (
                <li><Link to="/register">Register if not already registered</Link></li>
              )}
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* Other routes */}
          </Switch>
        </main>
        <footer>
          {/* Your footer content */}
        </footer>
      </Router>
    </div>
  );
}

export default App;
