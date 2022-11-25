import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__container">
          <Link to="/">       
            <span className="navbar__container__logo">77Booking</span>
          </Link>
          <div className="navbar__container__navItems">
              <button className="navbar__container__navItems__navButton">Register</button>
              <button className="navbar__container__navItems__navButton">Login</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar