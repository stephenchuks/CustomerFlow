import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationToggle, setRegistrationToggle] = useState(false);

  useEffect(() => {
    // Function to retrieve the authentication token from local storage
    const getAuthToken = () => {
      return localStorage.getItem('authToken'); // Replace with your actual storage mechanism
    };

    // Check if a token exists
    const authTokenExists = getAuthToken();

    if (authTokenExists) {
      // If a token exists, set it in state
      setAuthToken(authTokenExists);
    }
  }, []);

  useEffect(() => {
    // If authToken exists, make an authenticated request
    if (authToken) {
      axios.get('http://localhost:8000/api/users/me/', {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, [authToken]);

  // Handle user registration
  const handleRegistration = () => {
    axios.post('http://localhost:8000/api/auth/users/', {
      email: email,
      username: username,
      password: password,
    })
    .then((response) => {
      axios.post('http://localhost:8000/api/token/login/', {
        email: email,
        password: password,
      })
      .then((loginResponse) => {
        setAuthToken(loginResponse.data.auth_token);
      })
      .catch((loginError) => {
        console.error('Login failed', loginError);
      });
    })
    .catch((registrationError) => {
      console.error('Registration failed', registrationError);
    });
  };

  // Handle user login
  const handleLogin = () => {
    axios.post('http://localhost:8000/api/token/login/', {
      username: username,
      password: password,
    })
    .then((response) => {
      setAuthToken(response.data.auth_token);
    })
    .catch((error) => {
      console.error('Login failed', error);
    });
  };

  // Handle user logout
  const handleLogout = () => {
    axios.post('http://localhost:8000/api/token/logout/', null, {
      headers: {
        Authorization: `Token ${authToken}`,
      },
    })
    .then(() => {
      setAuthToken(null);
    })
    .catch((error) => {
      console.error('Logout failed', error);
    });
  };

  const updateFormBtn = () => {
    setRegistrationToggle(!registrationToggle);
  };

  return (
    <div className="App">
      <h1>User Authentication</h1>
      {authToken ? (
        <div>
          <p>Logged in as {userData ? userData.username : 'Loading...'}</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Include other authenticated content */}
        </div>
      ) : (
        <div>
          {registrationToggle ? (
            <div>
              <p>Register</p>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleRegistration}>Register</button>
              <p>Already have an account? <span onClick={updateFormBtn}>Login</span></p>
            </div>
          ) : (
            <div>
              <p>Login</p>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button onClick={handleLogin}>Login</button>

              <p>Don't have an account? <span onClick={updateFormBtn}>Register</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
