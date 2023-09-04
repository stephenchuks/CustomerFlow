import React from 'react';
import { useAuth } from './AuthContext'; // Import the useAuth hook

function Homepage() {
  const { user } = useAuth(); // Access user data from the context

  return (
    <div>
      <h2>Welcome to the Homepage</h2>
      {user ? (
        <div>
          <p>You are logged in as {user.username}. You can access special features here.</p>
          {/* Add content for authenticated users */}
        </div>
      ) : (
        <div>
          <p>You are not logged in. Please log in to access special features.</p>
          {/* Add content for non-authenticated users */}
        </div>
      )}
    </div>
  );
}

export default Homepage;
