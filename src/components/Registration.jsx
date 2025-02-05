import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Registration({ token, setToken }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //   const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, firstName, lastName, password);
    try {
      const response = await fetch(
        "https://all-together-now.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      window.sessionStorage.setItem("token", data.token); // Store token
      setToken(data.token);
      //   navigate("/"); // Redirect to Homepage
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <h2>Register Below</h2>
        <br />
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </label>
          <br />
          <label>
            First Name:
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              value={password}
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            ></input>
          </label>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
