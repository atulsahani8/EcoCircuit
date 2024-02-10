import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        console.log("Login successful", responseData);
        navigate("/");
      } else {
        console.log("Login failed", responseData);
        setError(responseData.message);
      }
    } catch (error) {
      console.error("Error during login", error);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <br />
        <p style={{ marginTop: '12px' }}> 
          Not a user? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
