import React, { useState } from 'react';
import Login from './Login';
import UserProfile from './UserProfile';
import AdminProfile from './AdminProfile';
import CollegeProfile from './CollegeProfile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleLogin = ({ email, password }) => {
    // Mock credentials
    if (email === 'user@example.com' && password === 'user123') {
      setUserDetails({ role: 'user', name: 'John Doe' });
      setIsLoggedIn(true);
    } else if (email === 'admin@example.com' && password === 'admin123') {
      setUserDetails({ role: 'admin', name: 'Admin Jane' });
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {userDetails.name}</h1>
          {userDetails.role === 'user' && <UserProfile />}
          {userDetails.role === 'admin' && <AdminProfile />}
          <CollegeProfile />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
