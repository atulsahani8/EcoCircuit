import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Contact.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setSuccessMessage("Contact form submitted successfully.");
        console.log("Contact form submitted successfully");
        // navigate("/");
      } else {
        console.log("Contact form submission failed", responseData);
        setError(responseData.message);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setError("An error occurred while submitting the contact form");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
