import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <span className="navbar__container__logo">77Booking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navbar__container__navItems">
            <button className="navbar__container__navItems__navButton">Register</button>
            <button className="navbar__container__navItems__navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
