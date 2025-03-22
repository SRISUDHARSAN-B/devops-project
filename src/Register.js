// src/Register.js
import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (username && password) {
      // Call the register function
      onRegister();
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="loginbox bounce">
      <img
        src="https://www.pngitem.com/pimgs/m/146-1468843_profile-icon-orange-png-transparent-png.png"
        className="avatar"
        alt="Avatar"
      />
      <h1>REGISTER HERE</h1>
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
        <p>Confirm Password</p>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input type="submit" value="Register" />
        <a href="#" onClick={() => onRegister(false)}>
          Already have an account? Login
        </a>
      </form>
    </div>
  );
};

export default Register;
