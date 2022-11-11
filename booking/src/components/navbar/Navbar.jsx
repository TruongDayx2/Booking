import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__container">
            <span className="navbar__container__logo">77Booking</span>
            <div className="navbar__container__navItems">
                <button className="navbar__container__navItems__navButton">Register</button>
                <button className="navbar__container__navItems__navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar