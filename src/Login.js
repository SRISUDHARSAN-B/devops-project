// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (username && password) {
      onLogin(); // Trigger login callback when both fields are filled
    } else {
      alert('Please enter both username and password!');
    }
  };

  return (
    <div className="loginbox bounce"> {/* Add bounce class for animation */}
      <img
        src="https://www.pngitem.com/pimgs/m/146-1468843_profile-icon-orange-png-transparent-png.png"
        className="avatar"
        alt="Avatar"
      />
      <h1>LOGIN HERE</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
        <a href="#">Forgot Password?</a><br />
        <a href="#">Don't have an account?</a><br />
        <a href="#">Sign Up</a>
      </form>
    </div>
  );
};

export default Login; 