import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import "../css/navbar.css";
// import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>WebSite Scraper</h1>
        </div>
        <div className="navbar-menu">
          {user ? (
            <>
              <span className="navbar-username">{user.username}</span>

              <button
                className="navbar-button logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <span className="navbar-username">
              <button
                className="navbar-button logout-btn"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="navbar-button logout-btn"
                onClick={handleRegister}
              >
                Register
              </button>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
