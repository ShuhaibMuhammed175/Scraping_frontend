import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import AuthContext from "./AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="login-container">
      <form onSubmit={loginUser} className="login-form">
        <h2 className="login">Login</h2>

        

        <div className="form-group">
          <input type="text" placeholder="Email" required name="email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
          />
        </div>
        <button type="submit">Login</button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
