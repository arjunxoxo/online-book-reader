import React, { useState } from 'react';
import './styles.css'; // Import your CSS file
import { useHistory } from 'react-router-dom'; // Import useHistory hook for redirection

const LoginPage = () => {
  const history = useHistory(); // Initialize useHistory hook
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent form submission
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setShowSignup(false);
    setShowLogin(true); // Automatically switch to login after signup
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    const username = e.target[0].value;
    const password = e.target[1].value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      // Redirect to Header.js or any other page
      history.push('/header');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div class="login-page-container">
    <div className="logincontainer">
      <h2>Welcome</h2>
      <p>What do you want to:</p>
      <button onClick={handleShowLogin}>Login</button>
      <button onClick={handleShowSignup}>Sign Up</button>

      {showLogin && (
        <div id="loginForm">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {showSignup && (
        <div id="signupForm">
          <h3>Sign Up</h3>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              required
            />
            <input
              type="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default LoginPage;
