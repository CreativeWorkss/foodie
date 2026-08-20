import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "admin") {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="food-logo">🍔</div>

        <h1>Foodie</h1>

        <p className="login-subtitle">Delicious food is just a login away!</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <div className="demo-login">
          <p>Demo Login</p>
          <span>Username: admin</span>
          <span>Password: admin</span>
        </div>

        <p className="login-footer">🍕 Order. Eat. Enjoy.</p>
      </div>
    </div>
  );
}

export default Login;
