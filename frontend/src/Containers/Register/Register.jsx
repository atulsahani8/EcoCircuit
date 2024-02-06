import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, confirmPassword, name }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Registration successful", responseData);
        navigate("/login");
      } else {
        console.log("Registration failed", responseData);
        setError(responseData.message);
      }
    } catch (error) {
      console.error("Error during registration", error);
      setError("An error occurred during registration");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
        <br />
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;